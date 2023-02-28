import { Button, Modal } from "flowbite-react";
import { forEach } from "lodash";
import React, { useState } from "react";
import { Calendar } from "react-calendar";
import { useSelector } from "react-redux";
import { addOverrideDate } from "../../APi/api";
import PrimaryButton from "../../Common/PrimaryButton";
import useDateFormat from "../../hooks/useDateFormat";
import "./style.css";
const CalendarModal = ({ open, setOpen ,reloadOverride, setReloadOverride,overrideDate}) => {
  const {
    Auth: { userId },
    Doctor: { doctorId },
  } = useSelector((state) => state) || {};
  
  const [date, setDate] = useState(new Date());
  //   const TitleContent = ({ date, view, collectionDate }) => {
  //     const collectDate = !!collectionDate.find(
  //       (item) => new Date(item).getDate() === new Date(date).getDate()
  //     );}

  //     const collectionDate = []


  const titleContent = (date, view) => {

// console.log(date)
//     overrideDate.map(element =>{
      // const newDate  = new Date(element.date);
      // const day = newDate.getDay();
      if(view === "month" && date.getDay() === 2){
        return (
          <p className="bg-green-400 w-2 opacity-60 ml-7 h-2 rounded-full"></p>
        );
      }else{
        return null;
      }
    // })
  
     
      

   
  };
  const { yearMonthDay } = useDateFormat();
  const newDate = yearMonthDay(date);
  console.log(newDate);

  const dateOverrideHandler = async () => {
    const addOverride =await addOverrideDate({
      doctorId,
      date: newDate,
      overall_Availability: "",
      current_Availability: "",
    });
    console.log(addOverride);
    setReloadOverride(!reloadOverride);
    setOpen(false)
  };
  return (
    <React.Fragment>
      <Modal
        show={open}
        position="center"
        onClose={() => {
          setOpen(false);
        }}
      >
        <Modal.Body>
          <p className="font-bold text-xl pb-4">
            Select the date(s) you want to assign specific day
          </p>
          <p className="flex justify-end w-full pb-4 font-semibold  text-lg">
            Date:{" "}
            <span className="ml-2 font-normal border px-4 bg-gray-200 rounded-md mr-4">
              {newDate}
            </span>
          </p>
          <Calendar
            tileContent={({ date, view }) => titleContent(date, view)}
            showNavigation={true}
            className="!w-full !p-0 !m-0"
            onChange={setDate}
            date={date}
          />
        </Modal.Body>
        <Modal.Footer className="flex justify-between">
          <Button
            className="px-2 "
            color="gray"
            onClick={() => {
                setOpen(false);
              //   handleOtpSubmit();
            }}
          >
            Cancel
          </Button>
          <PrimaryButton handleSubmit={dateOverrideHandler}>Save</PrimaryButton>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default CalendarModal;
