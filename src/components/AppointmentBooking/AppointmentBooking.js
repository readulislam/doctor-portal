import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  BaseUrl,
  GetSlots,
  ListDiseases,
  LoginPatient,
  PatientRegister
} from "../../APi/api";
import OtpVerifyModal from "../../Common/OtpVerifyModal";
import useDateFormat from "../../hooks/useDateFormat";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { patientLoginByPhone } from "../../Store/Auth-Slice";

import AppointmentDiseases from "../Modal/AppointmentDiseases";
import BookingConfirmation from "../BookingConfirmation";
import RegistarModal from "../Modal/RegistarModal";
import AppointmentBookingView from "./AppointmentBookingView";
import BillReceipt from "../Modal/BillReceipt";

const AppointmentBooking = ({ doctorData, doctorId, setOpen, open,appointment, setAppointment,setOpenBillReceipt }) => {
  const { isLoggedIn, isRegister, userInfo, userId } = useSelector(
    (state) => state.Auth
  );
  const { setupRecaptcha } = useFirebaseAuth();
  const [openOtp, setOpenOtp] = useState(false);
  // const dispatch=useDispatch();
  const [OTPresult, setOTPResult] = useState("");
  //  const today=new Date();
  const [date, setDate] = useState(new Date());
 
  const [selected, setSelected] = useState(null);
  const [slotsInfo, setSlotsInfo] = useState(null);
  const [number, setNumber] = useState("");
  const [contact, setContact] = useState(false);
  
  const [registerModel, setRegisterModel] = useState(false);
  const [currentTime, setcurrentTime] = useState();
  const [selectedDisease, setSelectedDisease] = useState({});
  const [openDiseaseModal, setOpenDiseaseModal] = useState(false);
  const [otherDisease, setOtherDisease] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
 
  const {yearMonthDay} = useDateFormat()




  // const splitting = date.split("-");
  const newDate = yearMonthDay(date);
 
  const dispatch = useDispatch();

 
  // const navigate = useNavigate();
  useEffect(() => {
    const fetching = async () => {
      if (date && doctorId) {
        const data =await GetSlots({date:newDate, doctorId})
      
        
        setSlotsInfo(data);
        if (newDate===  yearMonthDay(new Date())) {
      
          setcurrentTime(`${moment().hours()} : ${moment().minutes()}`);
          
        } else {
          setcurrentTime();        
        }
      }
    };
    fetching();
  }, [date, doctorId]);
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
        
        setOpenDiseaseModal(!openDiseaseModal);
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
            setOpenDiseaseModal(!openDiseaseModal);
          }
        }
      }
    } catch (error) {}

    if (isLoggedIn) {
      setOpenDiseaseModal(!openDiseaseModal);

    } else {
      // setOpenDiseaseModal(!openDiseaseModal);
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
  }, [contact, number, isRegistered, setupRecaptcha]);
  const handleDispatch = async () => {
    dispatch(patientLoginByPhone(number));
    setOpenDiseaseModal(!openDiseaseModal);
  };
  const handleOtpSubmit = () => {
    // setOpenOtp(false)
  };
  const handleRegisterModel = async (apiData) => {
    setRegisterModel(false);
    const data = await PatientRegister(apiData);
    if (data) {
      const response = await setupRecaptcha(number, "patientBooking");
      setOTPResult(response);
      if (response) {
        setOpenOtp(true);
      }
    }
  };
  const handleDiseaseSubmit=(e)=>{
    e.preventDefault()
  if(otherDisease){
    setAppointment({
      doctorId,
        patientId: userId,
        time: selected.time,
        timeSlotId: selected.id,
        diseaseId:null,
        appointmentType:e.target.bordered.value,
        diseaseName:e.target.disease.value,
        requestedByEmail: "",
        requestedByPhone: "",
        date:newDate ,
        status: false,
    })
    }else{
      setAppointment({
        doctorId,
        patientId: userId,
        time: selected.time,
        timeSlotId: selected.id,
        diseaseId:selectedDisease.id,
        appointmentType:e.target.bordered.value,
        diseaseName:selectedDisease.name,
        requestedByEmail: "",
        requestedByPhone: "",
        date:newDate ,
        status: false,
      })
    }
    setOpenConfirmModal(!openConfirmModal)
  }


  const props = {
    doctorData,
    setDate,
    slotsInfo,
    selected,
    setSelected,
    userId,
    number,
    setNumber,
    currentTime,
    disableDate,
    setOpen,
    open,
    handleSubmit,
    date,

  };

  return (
    <>
      <AppointmentBookingView modalHeaderTitle={'Book An Appointment'} props={props} />





      <OtpVerifyModal
        OTPresult={OTPresult}
        handleDispatch={handleDispatch}
        open={openOtp}
        number={number}
        setOpen={setOpenOtp}
        handleOtpSubmit={handleOtpSubmit}
      />

      {registerModel && (
        <RegistarModal
          number={number}
          setNumber={setNumber}
          newDate={newDate}
          selected={selected}
          handleRegisterModel={handleRegisterModel}
          open={registerModel}
          setOpen={setRegisterModel}
        />
      )}

      {openDiseaseModal && <AppointmentDiseases
      open={openDiseaseModal}
      setOpen={setOpenDiseaseModal}
      doctorData={doctorData}
      doctorId={doctorId}
      otherDisease={otherDisease}
      selectedDisease={selectedDisease}
      setSelectedDisease={setSelectedDisease}
      setOtherDisease={setOtherDisease}
      handleDiseaseSubmit={handleDiseaseSubmit}
      /> }
      {openConfirmModal && 
      <BookingConfirmation
        setOpen={setOpen}
        slotsInfo={slotsInfo}
        appointment={appointment}
        openConfirmModal={openConfirmModal}
        setOpenConfirmModal={setOpenConfirmModal}
        doctorData={doctorData}
        date={newDate}
   
       setOpenBillReceipt={setOpenBillReceipt}
      />}


    </>
  );
};

export default AppointmentBooking;
