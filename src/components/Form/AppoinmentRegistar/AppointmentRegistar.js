import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AppointmentBookedModal from '../../Modal/AppointmentBookedModal';
import ModalView from '../../Modal/ModalView';
import RegistarModal from '../../Modal/RegistarModal';


const AppointmentRegistar = ({ open, setOpen ,name,location,speciality,doctorId,}) => {
  const {isLoggedIn ,isRegister,userInfo} =useSelector(state=>state.Auth)
    const [existingUser, setExistingUser] = useState(false);
    const [time, setTime] = useState("");
    const [date, setDate] = useState(new Date());
    const [registarOpen, setRegistarOpen] = useState(false);
    const [done, setDone] = useState(false);
  
   
  return (
    <div> 
        <ModalView open={open} setDate={setDate} doctorId={doctorId} setTime={setTime} setOpen={setOpen} name={name} speciality={speciality} setRegistarOpen={setRegistarOpen}  existingUser={existingUser} location={location} />
        {(!isLoggedIn && isRegister) &&<RegistarModal open={registarOpen} setOpen={setRegistarOpen} location={location} setExistingUser={setExistingUser} setDone={setDone}/>}
        {done && <AppointmentBookedModal time={time} date={date} done={done} setDone={setDone} name={name} />}

    </div>
  )
}

export default AppointmentRegistar