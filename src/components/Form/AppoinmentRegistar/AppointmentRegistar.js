import { TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import AppointmentBookedModal from '../../Modal/AppointmentBookedModal';
import ModalView from '../../Modal/ModalView'
import RegistarModal from '../../Modal/RegistarModal';

const AppointmentRegistar = ({ open, setOpen ,name,location,speciality}) => {
    const [existingUser, setExistingUser] = useState(false);
    const [registarOpen, setRegistarOpen] = useState(false);
    const [done, setDone] = useState(false);
  return (
    <div> 
        <ModalView open={open} setOpen={setOpen} name={name} speciality={speciality} setRegistarOpen={setRegistarOpen}  existingUser={existingUser} location={location} />
        {(!existingUser && registarOpen) &&<RegistarModal open={registarOpen} setOpen={setRegistarOpen} location={location} setExistingUser={setExistingUser} setDone={setDone}/>}
        {done && <AppointmentBookedModal done={done} setDone={setDone} name={name} />}

    </div>
  )
}

export default AppointmentRegistar