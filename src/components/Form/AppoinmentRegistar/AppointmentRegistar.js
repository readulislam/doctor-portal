import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AppointmentBookedModal from '../../Modal/AppointmentBookedModal';
import ModalView from '../../Modal/ModalView';
import RegistarModal from '../../Modal/RegistarModal';


const AppointmentRegistar = ({ open, setOpen ,location,speciality,doctorId,doctorData}) => {
  const {isLoggedIn ,isRegister,userInfo,userId} =useSelector(state=>state.Auth)
    const [existingUser, setExistingUser] = useState(false);
    const [time, setTime] = useState("");
    const [date, setDate] = useState(new Date());
    const [registarOpen, setRegistarOpen] = useState(false);
  
  
   
  return (
    <div> 
        <ModalView open={open} setDate={setDate} doctorId={doctorId} setTime={setTime} setOpen={setOpen} doctorData={doctorData} speciality={speciality} setRegistarOpen={setRegistarOpen}  existingUser={existingUser} location={location} />
        
      

    </div>
  )
}

export default AppointmentRegistar