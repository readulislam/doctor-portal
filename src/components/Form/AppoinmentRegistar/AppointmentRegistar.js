import { TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import AppointmentBookedModal from '../../Modal/AppointmentBookedModal';
import ModalView from '../../Modal/ModalView'
import RegistarModal from '../../Modal/RegistarModal';

const AppointmentRegistar = ({ open, setOpen ,name,location,speciality}) => {
    const [existingUser, setExistingUser] = useState(false);
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [registarOpen, setRegistarOpen] = useState(false);
    const [done, setDone] = useState(false);
  return (
    <div> 
        <ModalView open={open} setDate={setDate}  setTime={setTime} setOpen={setOpen} name={name} speciality={speciality} setRegistarOpen={setRegistarOpen}  existingUser={existingUser} location={location} />
        {(!existingUser && registarOpen) &&<RegistarModal open={registarOpen} setOpen={setRegistarOpen} location={location} setExistingUser={setExistingUser} setDone={setDone}/>}
        {done && <AppointmentBookedModal time={time} date={date} done={done} setDone={setDone} name={name} />}

    </div>
  )
}

export default AppointmentRegistar