import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import BillReceipt from "../Modal/BillReceipt";
import ModelViewWrapper from "../Modal/ModelViewWrapper";

const BookingConfirmationView = ({
  setOpenConfirmModal,
  openConfirmModal,
  doctorData,
  date,
  selected,
}) => {
  const { userInfo, userId } = useSelector((state) => state.Auth);
  console.log("hiiiiii");
  const [openBillReceipt, setOpenBillReceipt] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = await AddDoctorAppointment({
    //   doctorId,
    //   patientId: userId,
    //   time: selected.time,
    //   timeSlotId: selected.id,
    //   requestedByEmail: "",
    //   requestedByPhone: "",
    //   date,
    //   status: false,
    // });

    // setAppointment(data)
    // if (data) {
    //   // doctorId, date, timeRange, slotId
    //   const query = {
    //     doctorId,
    //     timeRange: slotsInfo.timeRange,
    //     slotId: selected.id,
    //     date,
    //     weekday: slotsInfo.weekday,
    //   };
    //   const update = await updateTimeSlot(query);
    // }
    setOpenBillReceipt(true);
  };
  const random = 100000 * Math.random(1000);
  const serialNO = Math.ceil(random);
  console.log(serialNO);
  const props = {
    open: true,
    handleSubmit,
    setOpen: false,
  };
  return (
    <React.Fragment>
      <ModelViewWrapper
        PrimaryButtonTitle={"Submit"}
        PrimaryButtonType="submit"
        modalHeaderTitle={"Appointment Confirmation"}
        props={props}
      >
        <p className="text-base leading-relaxed  ml-5 text-gray-500 dark:text-gray-400 mb-2">
          Your Appointment Detail are Below :
        </p>

        <div className="flex flex-col text-md  w-full text-left ml-5 ">
          <div>
            <p className="text-sm font-serif leading-relaxed  text-gray-500 dark:text-gray-400">
              Date :{date}
            </p>

            <p className=" leading-relaxed font-serif  text-gray-500 dark:text-gray-400">
              AP No : {serialNO}
            </p>

            <p className=" font-serif leading-relaxed text-gray-500 dark:text-gray-400">
              Time :{selected?.time} 8.00am
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-1 text-lg sm:gap-y-0 gap-y-3 pt-6 justify-items-center">
          <div className="">
            <p className="  font-serif dark:text-gray-400">
              Doctor Name : {doctorData?.name}
            </p>
            <p className="  font-serif dark:text-gray-400">
              Specialty : Oncology
            </p>
            <p className="  font-serif dark:text-gray-400">
              Mobile No : +96125484264
            </p>
            <p className="  font-serif  dark:text-gray-400">
              Hospital name :{" "}
              {doctorData?.hospital?.name +
                ", " +
                doctorData?.hospital?.address}
            </p>
            <p className=" font-serif dark:text-gray-400">
              Consultation Charge : 800 Rs
            </p>
          </div>

          <div className="">
            <p className="  font-serif dark:text-gray-400">
              Patient Name : {doctorData?.name}
            </p>
            <p className="  font-serif dark:text-gray-400">
              Disease : Oncology
            </p>
            <p className="  font-serif dark:text-gray-400">
              Mobile No : +96125484264
            </p>
            <p className="  font-serif  dark:text-gray-400">
              Hospital name :{" "}
              {doctorData?.hospital?.name +
                ", " +
                doctorData?.hospital?.address}
            </p>
            <p className=" font-serif dark:text-gray-400">
              Address: Delhi ,India
            </p>
          </div>
        </div>

        <label
          for="message"
          class="block font-serif mb-2 pt-10 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="10"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 appearance-none focus:border-gray-300 dark:bg-gray-700 dark:border-gray-600 active:outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500


border-none px-3 py-2.5 placeholder-blueGray-300     focus:outline-none focus:ring-0   ease-linear


"
          placeholder="Write your thoughts here..."
        ></textarea>

        <p className="  leading-relaxed font-serif justify-center  text-gray-500 pt-4 text-sm dark:text-gray-400">
              Thank You <span className="text-black">{userInfo?.firstName+' '+userInfo?.middleName +" "}</span>
              for entrusting Your health to us 
            </p>
      </ModelViewWrapper>

      
      {openBillReceipt && (
        <BillReceipt
          open={openBillReceipt}
          setOpen={setOpenBillReceipt}
          doctorData={doctorData}
          date={date}
          selected={selected}
        />
      )}
    </React.Fragment>
  );
};

export default BookingConfirmationView;
