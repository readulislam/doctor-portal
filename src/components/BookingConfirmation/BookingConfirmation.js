import React from 'react'
import BookingConfirmationView from './BookingConfirmationView'

const BookingConfirmation = ({openConfirmModal,setOpenConfirmModal,doctorData,date,selected,appointment}) => {
  return (
    <>
    
    <BookingConfirmationView openConfirmModal={openConfirmModal} appointment={appointment} setOpenConfirmModal={setOpenConfirmModal} doctorData={doctorData}  date={date}
        selected={selected}/>
    </>
  )
}

export default BookingConfirmation