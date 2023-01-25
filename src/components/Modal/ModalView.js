import axios from "axios";
import { Button, Modal, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useDispatch, useSelector } from "react-redux";

import toast from "react-hot-toast";
import { AddDoctorAppointment, BaseUrl, ListDiseases, LoginPatient, PatientRegister, updateTimeSlot } from "../../APi/api";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { authActions, patientLoginByPhone } from "../../Store/Auth-Slice";

import OtpVerifyModal from "./OtpVerifyModal";
import RegistarModal from "./RegistarModal";
import moment from "moment";
import AppointmentBookedModal from "./AppointmentBookedModal";

import { isEmpty } from "lodash";

const ModalView = ({
  open,
  setOpen,
  doctorData,
  doctorId,
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
  const [registerModel, setRegisterModel] = useState(false);
  const [currentTime, setcurrentTime] = useState();
  const [disease, setDisease] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [openDiseaseInput, setOpenDiseaseInput] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const dispatch = useDispatch();

  const splitting = date.split("-");
  const newDate = splitting[2] + "/" + splitting[1] + "/" + splitting[0];
  // const navigate = useNavigate();
  useEffect(() => {
    const fetching = async () => {
      if (date && doctorId) {
        const { data } = await axios.post(
          `${BaseUrl}/get-slots?date=${newDate}&doctorId=${doctorId}`
        );
        console.log(data);
        setSlotsInfo(data);
        

        console.log(moment().hours());
        if (date === new Date().toJSON().slice(0, 10)) {
          setcurrentTime(`${moment().hours()} : ${moment().minutes()}`);
          console.log(currentTime);
        } else {
          setcurrentTime();
        }
      }
    };
    fetching();
  }, [date, doctorId]);
  useEffect(() => {
    const fetch=async()=>{
      const {data}=await ListDiseases(doctorData.departmentId)
      setDisease(data)
        
    }
   fetch()
  }, [doctorId])
  const disableDate = () => {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();

    return year + "-" + month + "-" + day;
  };
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
            diseaseId:parseInt(selectedDisease),
            diseaseName:"",
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
          }
        console.log(doctorData);
        console.log("rrrrrr");
        setOpenConfirmModal(!openConfirmModal);
        console.log(openConfirmModal,"jdfdi");
      } else {
        if (selected && number) {
          const response = await LoginPatient(number);

          if (response.contact) {
            setContact(true);
          } else {
            toast.error(`${response.massage}`, { id: 1 });
            setRegisterModel(true);
          }

          if (userId && isLoggedIn) {
            setOpenConfirmModal(!openConfirmModal);
          }
        }
      }
    } catch (error) {}

    if (isLoggedIn) {
      setOpenConfirmModal(!openConfirmModal)
      setOpen(false);
      
    } else {
      setOpenConfirmModal(!openConfirmModal);
    }
  };

  useEffect(() => {
    const verify = async () => {
      if (number && contact) {
        console.log(number);
        const response = await setupRecaptcha(number, "patientBooking");
        setOTPResult(response);
        if (response) {
          setOpenOtp(true);
        }
      }
    };
    verify();
  }, [contact, number, isRegistered, setupRecaptcha]);
  const handleDispatch = async () => {
    dispatch(patientLoginByPhone(number));
    setOpen(false);
    setOpenConfirmModal(!openConfirmModal);
  };
  const handleOtpSubmit = () => {
    // setOpenOtp(false)
  };
  const handleRegisterModel = async (apiData) => {
    console.log(apiData);
    setRegisterModel(false);
    const data = await PatientRegister(apiData);
    if (data) {
      //  dispatch(authActions.userRegister({userId:data.id, userInfo:data}))

      console.log(data);
      const response = await setupRecaptcha(number, "patientBooking");
      setOTPResult(response);
      if (response) {
        setOpenOtp(true);
      }
    }
  };
  
  console.log(openConfirmModal,"jdfdixs");
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
                  value={doctorData?.hospital.name+','+doctorData?.hospital.address}
                />
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="name@flowbite.com"
                  disabled
                  value={doctorData?.department.name}
                />
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="name@flowbite.com"
                  disabled
                  value={doctorData?.name}
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
              <div>
                <div className="flex items-center">
                <select
                required={true}
                onChange={(e)=>{
                  if(e.target.value==="others"){
                    setOpenDiseaseInput(true)
                  }else{
                    setSelectedDisease( e.target.value)
                  }
                }}
                  id="underline_select"
                  className=" py-2.5 mt-4 w-auto  text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                  name='experience'
                 >
                     <option selected>Disease</option>
                     {!isEmpty(disease)&&disease.map((data)=>{
                       return(<option value={data.id} >{data.name}</option>)
                     })}
                     <option value="others" >others</option>
                 </select>
                 {openDiseaseInput && <input required={true} onChange={(e)=>{}} className="mt-5 ml-5 border-b-2" name="disease" placeholder="disease name" />}
                </div>
              <div className="flex mt-5 items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                
                <label for="checkbox-table-search-2" className="sr-only">
                  checkbox
                </label>
                <p className="text-base leading-relaxed pl-3 text-gray-500 dark:text-gray-400">Follow Up Appoinment </p>
              </div>

              </div>

              <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                Consultation Charge : <span className="text-black">{doctorData.basicCharges} Rs</span>
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
                        !data.isAvailable || data.time < currentTime
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

      {registerModel&&<RegistarModal
        number={number}
        newDate={newDate}
        selected={selected}
        handleRegisterModel={handleRegisterModel}
        open={registerModel}
        setOpen={setRegisterModel}
      />}
      {openConfirmModal && 
      <AppointmentBookedModal
      openConfirmModal={openConfirmModal}
      setOpenConfirmModal={setOpenConfirmModal}
        doctorData={doctorData}
        date={newDate}
        selected={selected}
      />}
      

    </>
  );
};

export default ModalView;
