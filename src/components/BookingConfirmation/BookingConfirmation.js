import React from 'react'
import BookingConfirmationView from './BookingConfirmationView'

const BookingConfirmation = ({openConfirmModal,slotsInfo,setOpenConfirmModal,doctorData,date,appointment}) => {
  return (
    <>
    
    <BookingConfirmationView openConfirmModal={openConfirmModal} appointment={appointment}  slotsInfo={slotsInfo} setOpenConfirmModal={setOpenConfirmModal} doctorData={doctorData}  date={date}
        />
    </>
  )
}

export default BookingConfirmation