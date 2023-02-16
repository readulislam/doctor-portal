import { Checkbox } from "flowbite-react";
import { AiOutlineCheck } from "react-icons/ai";
import React, { useState } from "react";

const ManageAvailabilitiesView = () => {
  const [sunday, setSunday] = useState(false);
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thrusday, setThrusday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);

  const handleChange = (setChange, e) => {
    setChange(e.target.checked);
  };
  const HandleAvailability = (name) => {
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const handleSubmit = () => {
      console.log("handleSubmit called",name,startTime);
    };
    
    return <div id={name}  className="flex flex-row place-items-center" >
    <label className="px-4" >
      <span className="pr-4">from</span>
    <input id={name} type="time"  min="00:00" value={startTime} max="23:59" className=" h-8"   onChange={(e)=>{setStartTime(e.target.value);}} />
    </label>
    <label className="px-4" >
      <span className="pr-4">to</span>
    <input id={name} type="time"  min="00:00" max="23:59" value={endTime} className="h-8"  onChange={(e)=>{setEndTime(e.target.value)}} />
    </label>
    <AiOutlineCheck  onClick={handleSubmit} />
    </div>;
  };
  

  return (
    <div className="flex">
      <div className="flex flex-col gap-4 " id="checkbox">
      <p className="text-xl mb-2 uppercase font-[500]">Set Availability</p>
        <div className="flex items-center gap-2">
          <Checkbox
            id="Sunday"
            onChange={(e) => {
              handleChange(setSunday, e);
            }}
          />
          <label htmlFor="Sunday">Sunday</label>
          {sunday && <HandleAvailability name="sunday" />}
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="Monday"
            onChange={(e) => {
              handleChange(setMonday, e);
            }}
          />
          <label htmlFor="Monday">Monday</label>
          {monday && <HandleAvailability name="monday" />}
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="Tuesday"
            onChange={(e) => {
              handleChange(setTuesday, e);
            }}
          />
          <label htmlFor="Tuesday">Tuesday</label>
          {tuesday && <HandleAvailability name="tuesday" />}
        </div>
        <div className="flex  items-center gap-2">
          <Checkbox
            id="Wednesday"
            onChange={(e) => {
              handleChange(setWednesday, e);
            }}
          />
          <label htmlFor="Wednesday">Wednesday</label>
          {wednesday && <HandleAvailability name="wednesday" />}
        </div>
        <div className="flex  items-center gap-2">
          <Checkbox
            id="Thrusday"
            onChange={(e) => {
              handleChange(setThrusday, e);
            }}
          />
          <label htmlFor="Thrusday">Thrusday</label>
          {thrusday && <HandleAvailability name="thrusday" />}
        </div>
        <div className="flex  items-center gap-2">
          <Checkbox
            id="Friday"
            onChange={(e) => {
              handleChange(setFriday, e);
            }}
          />
          <label htmlFor="Friday">Friday</label>
          {friday && <HandleAvailability name="friday" />}
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="saturday"
            onChange={(e) => {
              handleChange(setSaturday, e);
            }}
          />
          <label htmlFor="saturday">Saturday</label>
          {saturday && <HandleAvailability name="saturday" />}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ManageAvailabilitiesView;
