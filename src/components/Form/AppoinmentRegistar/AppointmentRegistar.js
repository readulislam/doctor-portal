import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AppointmentBookedModal from '../../Modal/AppointmentBookedModal';
import ModalView from '../../Modal/ModalView';
import RegistarModal from '../../Modal/RegistarModal';


const AppointmentRegistar = ({ open, setOpen ,doctorId,doctorData}) => {
 
  
  
   
  return (
    <div> 
        <ModalView open={open}  doctorId={doctorId}  setOpen={setOpen} doctorData={doctorData}   />
        
      

    </div>
  )
}

export default AppointmentRegistar