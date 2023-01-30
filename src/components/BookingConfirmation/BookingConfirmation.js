import React from 'react'
import BookingConfirmationView from './BookingConfirmationView'

const BookingConfirmation = ({openConfirmModal,slotsInfo,setOpenConfirmModal,doctorData,setOpen,date,appointment}) => {
  return (
    <>
    
    <BookingConfirmationView openConfirmModal={openConfirmModal}  setOpen={setOpen} appointment={appointment}  slotsInfo={slotsInfo} setOpenConfirmModal={setOpenConfirmModal} doctorData={doctorData}  date={date}
        />
    </>
  )
}

export default BookingConfirmation