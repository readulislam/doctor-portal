import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import { useSelector } from "react-redux";
import moment from 'moment';
import {
  AddWeeklyAvailability,
  BaseUrl,
  GetWeeklyAvailability,
  updateWeeklyAvailability,
} from "../../APi/api";
import { setDefaultAbailability } from "../../Utils/mockData";
import { toast } from "react-hot-toast";

const ManageAvailabilitiesView = () => {
  const {
    Auth: { userId },
    Doctor: { doctorId },
  } = useSelector((state) => state) || {};
  const [defaultTime, setDefaultTime] = useState({
    startTime: "09:00",
    endTime: "17:00",
  });

  const [availability, setAvailability] = useState([
    { name: "sunday", schedule: null },
    { name: "monday", schedule: null },
    { name: "Tuesday", schedule: null },
    { name: "wednesday", schedule: null },
    { name: "thursday", schedule: null },
    { name: "friday", schedule: null },
    { name: "saturday", schedule: null },
  ]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetching = async () => {
      const isAvailability = await GetWeeklyAvailability(doctorId);
      console.log(isAvailability);

      if (!isAvailability) {
        const addAvailability = await AddWeeklyAvailability({
          ...setDefaultAbailability,
          doctorId,
        });
        console.log(addAvailability);
      } else {
        setAvailability([
          { name: "sunday", schedule: isAvailability.sunday },
          { name: "monday", schedule: isAvailability.monday },
          { name: "tuesday", schedule: isAvailability.tuesday },
          { name: "wednesday", schedule: isAvailability.wednesday },
          { name: "thursday", schedule: isAvailability.thursday },
          { name: "friday", schedule: isAvailability.friday },
          { name: "saturday", schedule: isAvailability.saturday },
        ]);
      }
    };
    fetching();
  }, [doctorId, reload]);

  const availabilityHandler = async (name, schedule) => {
    console.log(schedule, name);
    if (!schedule) {
      const update = await updateWeeklyAvailability({
        id:1,
        doctorId,
        ...defaultTime,
        weekday: name,
      });
      setReload(!reload);
      console.log(update);
    }else{
      const update = await axios.put(`${BaseUrl}/set-empty`,{
        doctorId,
        weekday: name,
      })
 setReload(!reload);
      console.log(schedule.length)
    }
  };
const startTimeHandler = async (event,id,name,endTime) => {

console.log(id, name)
const update = await updateWeeklyAvailability({
  id:1,
  doctorId,
 startTime: event.target.value,
 endTime,
  weekday: name,
});
setReload(!reload);
console.log(defaultTime)
}
const endTimeHandler = async (event,id,name,startTime) => {
const endTime= event.target.value;

if(endTime > startTime){
  const update = await updateWeeklyAvailability({
    id:1,
    doctorId,
   startTime,
   endTime,
    weekday: name,
  });
  setReload(!reload);
}else{
  toast.error('This is smaller to start time',{id:1})
}
console.log(defaultTime)
}
  return (

    <div className="bg-white h-[84vh] mt-2 rounded-lg grid  md:grid-cols-4 border">
      <div
        className={`row-span-1 md:col-span-2   md:border-r px-8 overflow-y-auto`}
      >
        <p className="  font-semibold pt-6 pb-9">Set your weekly hours</p>
        {availability.map(({ name, schedule }, index) => (
          <>
            <div key={index} class="flex items-center justify-between ">
              <div className="flex items-center">
                <label
                  onClick={() => availabilityHandler(name, schedule)}
                  className="w-20 "
                >
                  <input
                   checked={schedule? true: false}
                    type="checkbox"
                    value={name}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <span class="ml-2 text-sm font-bold uppercase tracking-widest  text-gray-900 dark:text-gray-300">
                    {name.slice(0, 3)}
                  </span>
                </label>
              </div>

              {/* */}

              {schedule ? (
                <>
                  {schedule.map((data) => (
                    <>
                      <div>
                        <input
                        
                        onChange={(e)=>startTimeHandler(e,data.id,name, data.endTime)}
                          type="time"
                          class="h-10  px-1 mr-[2px] rounded-md border-2 border-gray-300"
                          value={data?.startTime}
                          name="startTime"
                        />
                        <span>-</span>
                        <input
                         onChange={(e)=>endTimeHandler(e,data.id,name, data.startTime)}
                          type="time"
                          class="h-10 px-1 ml-[2px] rounded-md border-2 border-gray-300"
                          value={data?.endTime}
                          name="timein"
                        />
                      </div>
                    </>
                  ))}
                </>
              ) : (
                <p className="text-sm font-medium text-gray-500">Unavailable</p>
              )}

              <div className="flex items-center gap-x-4 text-gray-500">
                <AiOutlinePlus
                  className="cursor-pointer hover:bg-gray-200 p-1 rounded-md"
                  size={32}
                />
                <FiCopy
                  className="cursor-pointer hover:bg-gray-200 rounded-md p-1"
                  size={32}
                />
              </div>
            </div>
            {!(index === availability.length - 1) && (
              <hr className="md:my-6 " />
            )}
          </>
        ))}
      </div>
      <div className="px-8 col-span-2 w-full">
        <p className=" font-semibold py-5">Add date overrides</p>
        <p className="text-sm text-gray-500">
          Add dates when your availability changes from your weekly hours
        </p>
        <button className=" p-1.5 px-4 border-blue-700 text-blue-700 rounded-full mx-auto my-6 border">
          Add a date override
        </button>
      </div>
    </div>
  );
};

export default ManageAvailabilitiesView;
