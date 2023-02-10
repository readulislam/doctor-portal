import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AddDoctorAppointment, updateTimeSlot } from "../../APi/api";
import BillReceipt from "../Modal/BillReceipt";
import ModelViewWrapper from "../Modal/ModelViewWrapper";

const BookingConfirmationView = ({
  appointment,
  setOpenConfirmModal,
  slotsInfo,
  setOpen,
  openConfirmModal,
  doctorData,
  date,
  props,
  
}) => {
  const { userInfo, userId } = useSelector((state) => state.Auth);

  console.log(appointment);

  const random = 100000 * Math.random(1000);
  const serialNO = Math.ceil(random);
  console.log(serialNO);

  return (
    <React.Fragment>
      <ModelViewWrapper
        PrimaryButtonTitle={"Submit"}
        PrimaryButtonType="submit"
        PrimaryButtonTitle2={"Back"}
        modalHeaderTitle={"Appointment Confirmation"}
        props={props}
      >
        <p className="text-base leading-relaxed  ml-5 text-gray-500 dark:text-gray-400 mb-2">
          Your Appointment Detail are Below :
        </p>

        <div className="flex flex-col text-md  w-full text-left ml-5 ">
          <div>
            <p className="text-sm  leading-relaxed  text-gray-500 dark:text-gray-400">
              Date :{appointment?.date}
            </p>

            <p className=" leading-relaxed   text-gray-500 dark:text-gray-400">
              AP No : {serialNO}
            </p>

            <p className="  leading-relaxed text-gray-500 dark:text-gray-400">
              Time :{appointment?.time}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-1 text-lg sm:gap-y-0 gap-y-3 pt-6 justify-items-center">
          <div className="">
            <p className="   dark:text-gray-400">
              Doctor Name : {doctorData?.name}
            </p>
            <p className="   dark:text-gray-400">
              Specialty : {doctorData?.department.name}
            </p>
            <p className="   dark:text-gray-400">
              Mobile No : {doctorData?.contactNo}
            </p>
            <p className="    dark:text-gray-400">
              Hospital name :{" "}
              {doctorData?.hospital?.name +
                ", " +
                doctorData?.hospital?.address}
            </p>
            <p className="  dark:text-gray-400">
              Consultation Charge : {(appointment?.appointmentType==="Regular") ?(doctorData.basicCharges):(doctorData.followupCharges)}
            </p>
          </div>

          <div className="">
            <p className="   dark:text-gray-400">
              Patient Name : {(userInfo?.firstName).toUpperCase()}  {(userInfo?.lastName).toUpperCase()}
            </p>
            <p className="   dark:text-gray-400">
              Disease : {appointment?.diseaseName}
            </p>
            <p className="   dark:text-gray-400">
              Mobile No : {userInfo?.contact}
            </p>
            <p className="    dark:text-gray-400">
              Hospital name :{" "}
              {doctorData?.hospital?.name +
                ", " +
                doctorData?.hospital?.address}
            </p>
            <p className="  dark:text-gray-400">
              Address : {userInfo?.address}
            </p>
          </div>
        </div>

        <label
          for="message"
          class="block  mb-2 pt-10 text-sm font-medium text-gray-900 dark:text-white"
        >
          About Your Disease
        </label>
        <textarea
          id="message"
          rows="10"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 appearance-none focus:border-gray-300 dark:bg-gray-700 dark:border-gray-600 active:outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500


border-none px-3 py-2.5 placeholder-blueGray-300     focus:outline-none focus:ring-0   ease-linear


"
          placeholder="Write your thoughts here..."
        ></textarea>

        <p className="  leading-relaxed  justify-center  text-gray-500 pt-4 text-sm dark:text-gray-400">
              Thank You <span className="text-black">{userInfo?.firstName+' '+userInfo?.lastName +" "}</span>
              for entrusting Your health to us 
            </p>
      </ModelViewWrapper>

      
    
    </React.Fragment>
  );
};

export default BookingConfirmationView;
