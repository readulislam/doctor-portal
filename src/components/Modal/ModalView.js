import axios from "axios";
import { Button, Modal, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import toast from 'react-hot-toast';
import {
  AddDoctorAppointment,
  BaseUrl,
  LoginPatient,
  updateTimeSlot
} from "../../APi/api";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { patientLoginByPhone } from "../../Store/Auth-Slice";
import AppointmentBookedModal from "./AppointmentBookedModal";
import OtpVerifyModal from "./OtpVerifyModal";
import RegistarModal from "./RegistarModal";
import moment from "moment";
import jsPDF from "jspdf";

const ModalView = ({
  open,
  setOpen,
  doctorData,
  location,
  speciality,
  existingUser,
  
  doctorId,
  setRegistarOpen,
  setTime,
}) => {
  const { isLoggedIn, isRegister, userInfo, userId } = useSelector(
    (state) => state.Auth
  );
  const { setupRecaptcha } = useFirebaseAuth();
  const [openOtp, setOpenOtp] = useState(false);
  // const dispatch=useDispatch();
  const [OTPresult, setOTPResult] = useState("");
  const [date, setDate] = useState("");
  const [selected, setSelected] = useState(null);
  const [slotsInfo, setSlotsInfo] = useState(null);
  const [number, setNumber] = useState("");
  const [contact, setContact] = useState(false);
  const [appointment, setAppointment] = useState({});
  const [registerModel, setRegisterModel] = useState(false)
  const [currentTime, setcurrentTime] = useState();
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetching = async () => {
      if (date && doctorId) {
        const splitting = date.split("-");
        const newDate = splitting[2] + "/" + splitting[1] + "/" + splitting[0];
        const { data } = await axios.post(
          `${BaseUrl}/get-slots?date=${newDate}&doctorId=${doctorId}`
        );
        console.log(data);
        setSlotsInfo(data);

        console.log(moment().hours());
        if (date===new Date().toJSON().slice(0, 10)) {
          setcurrentTime(`${moment().hours()} : ${moment().minutes()}`)  
          console.log(currentTime);
        }else{
          setcurrentTime()
        }
        
        
      }
    };
    fetching();
  }, [date, doctorId]);
  const disableDate=()=>{
    var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    return year + '-' + month + '-' + day;

  
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { date } = slotsInfo;

  try {
    if (doctorId && userId) {
    
      const data = await AddDoctorAppointment({
        doctorId,
        patientId: userId,
        time: selected.time,
        timeSlotId: selected.id,
        requestedByEmail: "",
        requestedByPhone: "",
        date,
        status: false,
      });
      setAppointment(data)
      if (data) {
        // doctorId, date, timeRange, slotId
   
        const update = await updateTimeSlot({
          doctorId,
          timeRange: slotsInfo.timeRange,
          slotId: selected.id,
          date,
          weekday: slotsInfo.weekday,
        });
        
        const doc=new jsPDF('landscape','px','a4','false')
        doc.text(`Doctor's name : ${doctorData.name}`,10,10)
        doc.text(`patient's name : ${userInfo.firstName}  ${userInfo.middleName}`,20,20)
        doc.text(`charges : 800`,30,30)
        doc.text(`date and time of appointment : ${date}  ${selected.time}`,40,40)
        doc.save('bil.pdf')
        setSelected(null);
        setDate("");
        toast.success( `Appointment Booking Successfully `,{id:1})
      }
   
  } else {
    if (selected && number) {
      const response = await LoginPatient(number);

      if (response.contact) {
        setContact(true);
      } else {
        
        toast.error( `${response.massage}`,{id:1})
        setRegisterModel(true)
      }

      if (userId && isLoggedIn) {
        const data = await AddDoctorAppointment({
          doctorId,
          patientId: userId,
          time: selected.time,
          timeSlotId: selected.id,
          requestedByEmail: "",
          requestedByPhone: "",
          date,
          status: false,
        });

        setAppointment(data)
        if (data) {
          // doctorId, date, timeRange, slotId
          const query = {
            doctorId,
            timeRange: slotsInfo.timeRange,
            slotId: selected.id,
            date,
            weekday: slotsInfo.weekday,
          };
          const update = await updateTimeSlot(query);
          const doc=new jsPDF('landscape','px','a4','false')
          doc.text(`Doctor's name : ${doctorData.name}`,10,10)
          doc.text(`patient's name : ${userInfo.firstName}  ${userInfo.middleName}`,10,20)
          doc.text(`charges : 800`,10,30)
          doc.text(`date and time of appointment : ${date}  ${selected}`,10,40)
          doc.save('bil.pdf')
          setSelected(null);
          setDate("");
          toast.success( `Appointment Booking Successfully `,{id:1})
        }
      }
    }
  }
  } catch (error) {
    
  }
  
    if (isLoggedIn) {
      setOpen(false);
     
     
    } else {
      setRegistarOpen(true);
    }
  };

  useEffect(() => {
    const verify = async () => {
      if (number && contact) {
        const response = await setupRecaptcha(number, "patientBooking");
        setOTPResult(response);
        if (response) {
          setOpenOtp(true);
        }
      }
    };
    verify();
  }, [contact, number]);
  const handleDispatch = async () => {
    await dispatch(patientLoginByPhone(number));
    setOpen(false);
  };
  const handleOtpSubmit = () => {
    // setOpenOtp(false)
  };
  return (
    <>
      {" "}
      <Modal show={open} position="center" onClose={() => setOpen(false)}>
        <form id="form" onSubmit={handleSubmit}>
          <Modal.Header>Book An Appointment</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 p-6">
              <div className="grid grid-cols-2 gap-4 ">
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="name@flowbite.com"
                  disabled
                  value={location}
                />
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="name@flowbite.com"
                  disabled
                  value={speciality}
                />
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="name@flowbite.com"
                  disabled
                  value={doctorData.name}
                />

                <TextInput
                  id="date"
                  type="date"
                  required={true}
                  min={disableDate()}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>

              <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                Consultation Charge : <span className="text-black">800 Rs</span>
              </p>
              {slotsInfo?.data && (
                <h3 className="font-semibold w-full  text-center text-xl">
                  {slotsInfo.data}
                </h3>
              )}
              <div className="grid grid-cols-6 gap-4">
                {slotsInfo?.slots &&
                  slotsInfo?.slots?.map((data, index) => (
                    <div
                      key={index}
                      onClick={() => setSelected(data)}
                      className={`text-base ${
                        selected?.id === data.id && "bg-blue-600 text-white"
                      } ${
                        !data.isAvailable||(data.time<currentTime)
                          ? "bg-gray-400/10 text-gray-400/50"
                          : "shadow-md hover:bg-sky-500 hover:text-white cursor-pointer  "
                      } border   py-1 px-3 text-center rounded-md`}
                    >
                      {data.time}
                    </div>
                  ))}
              </div>
              <div>
                {!userId && (
                  <>
                    <label>
                      <span>Phone Number</span>
                      <PhoneInput
                        defaultCountry="IN"
                        className="border-2"
                        placeholder="Enter phone number"
                        value={number}
                        onChange={setNumber}
                      />
                    </label>

                    <div className="my-4" id="patientBooking" />
                  </>
                )}
              </div>
              
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-between">
            <Button color="gray" onClick={() => setOpen(false)}>
              Decline
            </Button>
            <Button
              type="submit"
              color
              className="px-2 "
              gradientDuoTone="cyanToBlue"
            >
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      <OtpVerifyModal
        OTPresult={OTPresult}
        handleDispatch={handleDispatch}
        open={openOtp}
        number={number}
        setOpen={setOpenOtp}
        handleOtpSubmit={handleOtpSubmit}
      />

<RegistarModal open={registerModel} setOpen={setRegisterModel}/>
        

{/* {done && <AppointmentBookedModal time={appointment.time} date={appointment.date} done={done} setDone={setDone}  />} */}
    </>
  );
};

export default ModalView;
