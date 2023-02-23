import { Checkbox } from "flowbite-react";
import { AiOutlineCheck } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import React, { useState } from "react";
import DoctorDashBoard from "../DoctorDashBoard/DoctorDashBoard";

const ManageAvailabilitiesView = () => {
  const [sunday, setSunday] = useState(false);
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sundayTime, setSundayTime] = useState({ startTime: "", endTime: "" });
  const [mondayTime, setMondayTime] = useState({ startTime: "", endTime: "" });
  const [tuesdayTime, setTuesdayTime] = useState({
    startTime: "",
    endTime: "",
  });
  const [wednesdayTime, setWednesdayTime] = useState({
    startTime: "",
    endTime: "",
  });
  const [thursdayTime, setThursdayTime] = useState({
    startTime: "",
    endTime: "",
  });
  const [fridayTime, setFridayTime] = useState({ startTime: "", endTime: "" });
  const [saturdayTime, setSaturdayTime] = useState({
    startTime: "",
    endTime: "",
  });

  const handleChange = (setChange, e) => {
    setChange(e.target.checked);
  };
  const HandleAvailability = ({
    name,
    setAvailability,
    availability,
    inputDisabled,
    setInputDisabled
  }) => {

    const handleSubmit = () => {
      console.log("handleSubmit called", name, availability);

      setInputDisabled(!inputDisabled)
    };

    return (
      <div id={name} className="flex flex-row place-items-center">
        <label className="px-4">
          <input
            id={name}
            disabled={!inputDisabled}
            type="time"
            min="00:00"
            value={availability?.startTime}
            max="23:59"
            className=" h-8"
            onChange={(e) => {
              setAvailability({
                startTime: e.target.value,
                endTime: availability.endTime,
              });
            }}
          />
        </label>
        <label className="px-4">
          <span className="pr-4">to</span>
          <input
            id={name}
            disabled={!inputDisabled}
            type="time"
            min="00:00"
            max="23:59"
            value={availability?.endTime}
            className="h-8"
            onChange={(e) => {
              setAvailability({
                startTime: availability.startTime,
                endTime: e.target.value,
              });
            }}
          />
        </label>
        {inputDisabled && <AiOutlineCheck onClick={handleSubmit} />}
      </div>
    );
  };

  return (
    <div className="flex">
      <div className="flex flex-col gap-4 " id="checkbox">
        <p className="text-xl mb-2 uppercase font-[500]">Set Availability</p>
        <div className="flex items-center gap-2">
          <Checkbox
            id="Sunday"
            checked={sunday}
            onChange={(e) => {
              handleChange(setSunday, e);
            }}
          />
          <label className="pr-2" >Sun</label>
          <HandleAvailability
            name="sunday"
            inputDisabled={sunday}
            setInputDisabled={setSunday}
            setAvailability={setSundayTime}
            availability={sundayTime}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="Monday"
            checked={monday}
            onChange={(e) => {
              handleChange(setMonday, e);
            }}
          />
          <label className="pr-1" >Mon</label>
          <HandleAvailability
            name="monday"
            inputDisabled={monday}
            setInputDisabled={setMonday}
            setAvailability={setMondayTime}
            availability={mondayTime}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="Tuesday"
            checked={tuesday}
            onChange={(e) => {
              handleChange(setTuesday, e);
            }}
          />
          <label className="pr-2" >Tue</label>
          <HandleAvailability
            name="tuesday"
            inputDisabled={tuesday}
            setInputDisabled={setTuesday}
            setAvailability={setTuesdayTime}
            availability={tuesdayTime}
          />
        </div>
        <div className="flex  items-center gap-2">
          <Checkbox
            id="Wednesday"
            checked={wednesday}
            onChange={(e) => {
              handleChange(setWednesday, e);
            }}
          />
          <label className="" >Wed</label>
          <HandleAvailability
            name="wednesday"
            inputDisabled={wednesday}
            setInputDisabled={setWednesday}
            setAvailability={setWednesdayTime}
            availability={wednesdayTime}
          />
        </div>
        <div className="flex  items-center gap-2">
          <Checkbox
            id="Thursday"
            checked={thursday}
            onChange={(e) => {
              handleChange(setThursday, e);
            }}
          />
          <label className="pr-1.5">Thu</label>
          <HandleAvailability
            name="thursday"
            inputDisabled={thursday}
            setInputDisabled={setThursday}
            setAvailability={setThursdayTime}
            availability={thursdayTime}
          />
        </div>
        <div className="flex  items-center gap-2">
          <Checkbox
            id="Friday"
            checked={friday}
            onChange={(e) => {
              handleChange(setFriday, e);
            }}
          />
          <label className="pr-4" >Fri</label>
          <HandleAvailability
            name="friday"
            inputDisabled={friday}
            setInputDisabled={setFriday}
            setAvailability={setFridayTime}
            availability={fridayTime}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="saturday"
            checked={saturday}
            onChange={(e) => {
              handleChange(setSaturday, e);
            }}
          />
          <label className="pr-2" >Sat</label>
          <HandleAvailability
            name="saturday"
            inputDisabled={saturday}
            setInputDisabled={setSaturday}
            setAvailability={setSaturdayTime}
            availability={saturdayTime}
          />
        </div>
      </div>
      <div className="pl-5 w-1/3">
        {/* <DoctorDashBoard/> */}
      </div>
    </div>
  );
};

export default ManageAvailabilitiesView;
