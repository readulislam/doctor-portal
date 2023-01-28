import React from 'react'
import BookingConfirmationView from './BookingConfirmationView'

const BookingConfirmation = ({openConfirmModal,setOpenConfirmModal,doctorData,date,selected}) => {
  return (
    <>
    
    <BookingConfirmationView openConfirmModal={openConfirmModal} setOpenConfirmModal={setOpenConfirmModal} doctorData={doctorData}  date={date}
        selected={selected}/>
    </>
  )
}

export default BookingConfirmation