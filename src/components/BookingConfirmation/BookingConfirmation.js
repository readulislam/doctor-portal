import React, { useState } from "react";
import { AddDoctorAppointment, updateTimeSlot } from "../../APi/api";
import BillReceipt from "../Modal/BillReceipt";
import BookingConfirmationView from "./BookingConfirmationView";

const BookingConfirmation = ({
  openConfirmModal,
  slotsInfo,
  setOpenConfirmModal,
  doctorData,
  setOpen,
  date,
  appointment,
}) => {
  const [openBillReceipt, setOpenBillReceipt] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await AddDoctorAppointment(appointment);
    console.log(data);
    if (data) {
      // doctorId, date, timeRange, slotId
      const query = {
        doctorId:appointment.doctorId,
        timeRange: slotsInfo.timeRange,
        slotId: appointment.timeSlotId,
        date,
        weekday: slotsInfo.weekday,
        isAvailable:false,
      };
      const update = await updateTimeSlot(query);
    }

    setOpenBillReceipt(true);
    setOpen(false);
  };
  const props = {
    open: openConfirmModal,
    setOpen: setOpenConfirmModal,
    handleSubmit,
  };
  return (
    <>
      <BookingConfirmationView
        openBillReceipt={openBillReceipt}
        setOpenBillReceipt={setOpenBillReceipt}
        props={props}
        openConfirmModal={openConfirmModal}
        setOpen={setOpen}
        appointment={appointment}
        slotsInfo={slotsInfo}
        setOpenConfirmModal={setOpenConfirmModal}
        doctorData={doctorData}
        date={date}
      />
      
        {/* <BillReceipt
          open={true}
          setOpen={setOpenBillReceipt}
          doctorData={doctorData}
       
          appointment={appointment}
        /> */}
      
    </>
  );
};

export default BookingConfirmation;
