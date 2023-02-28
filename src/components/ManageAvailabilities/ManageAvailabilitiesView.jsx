import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiCopy, FiTrash } from "react-icons/fi";
import { TbTrash } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  addNewAvailability,
  AddWeeklyAvailability,
  BaseUrl,
  deleteSchedule,
  GetWeeklyAvailability,
  updateWeeklyAvailability,
} from "../../APi/api";
import { setDefaultAbailability } from "../../Utils/mockData";
import { toast } from "react-hot-toast";

import CalendarModal from "../Modal/CalendarModal";
import { DoctorActions } from "../../Store/Doctor-Slice";


const ManageAvailabilitiesView = ({
  overrideDate,
  reloadOverride,
  setReloadOverride,
  overrideList,
  deleteOverrideDateHandler,
}) => {
  const {
    Auth: { userId },
    Doctor: { doctorId },
  } = useSelector((state) => state) || {};
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [defaultTime, setDefaultTime] = useState({
    startTime: "09:00",
    endTime: "12:00",
  });
const defaultData =  [{id:1, startTime:'09:00', endTime:'12:00'}]
  const [availability, setAvailability] = useState([
    { name: "sunday", schedule: defaultData },
    { name: "monday", schedule: defaultData },
    { name: "Tuesday", schedule:  defaultData },
    { name: "wednesday", schedule:  defaultData },
    { name: "thursday", schedule:  defaultData },
    { name: "friday", schedule:  defaultData },
    { name: "saturday", schedule:  defaultData },
  ]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetching = async () => {
      const isAvailability = await GetWeeklyAvailability(doctorId);

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
      dispatch(DoctorActions.changeThanReload())
    };
    fetching();
  }, [doctorId, reload,dispatch]);

  const availabilityHandler = async (name, schedule) => {
    console.log(schedule, name);
    if (!schedule) {
      const update = await updateWeeklyAvailability({
        id: 1,
        doctorId,
        ...defaultTime,
        weekday: name,
      });
      setReload(!reload);
      console.log(update);
    } else {
      const update = await axios.put(`${BaseUrl}/set-empty`, {
        doctorId,
        weekday: name,
      });
      setReload(!reload);
      console.log(schedule.length);
    }
  };
  const startTimeHandler = async (event, id, name, endTime) => {
    console.log(id, name);
    const update = await updateWeeklyAvailability({
      id,
      doctorId,
      startTime: event.target.value,
      endTime,
      weekday: name,
    });
    setReload(!reload);
    console.log(defaultTime);
  };
  const endTimeHandler = async (event, id, name, startTime) => {
    const endTime = event.target.value;

    if (endTime > startTime) {
      const update = await updateWeeklyAvailability({
        id,
        doctorId,
        startTime,
        endTime,
        weekday: name,
      });
      setReload(!reload);
    } else {
      toast.error("This is smaller to start time", { id: 1 });
    }
    console.log(defaultTime);
  };
  
  const addNewScheduleHandler = async (lastSchedule, name) => {
    if (lastSchedule) {
      const endTime = `${parseInt(lastSchedule.endTime.split(":")[0]) + 3}:00`;
      const startTime = `${
        parseInt(lastSchedule.endTime.split(":")[0]) + 1
      }:00`;
      console.log(startTime, endTime);
      const update = await addNewAvailability({
        doctorId,
        startTime,
        endTime,
        weekday: name,
      });
      setReload(!reload);
    } else {
    }
  };
  const scheduleDeleteHandler = async (index, name) => {
    const deleted = await deleteSchedule({
      doctorId,
      index: parseInt(index),
      weekday: name,
    });
    console.log(deleted);
    setReload(!reload);
  };
  console.log(availability);
  return (
    <div className="bg-white overflow-y-auto md:flex h-[84vh] mt-2 rounded-lg    border">
      <div
        className={` w-full   relative md:border-r px-6 overflow-y-auto`}
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
                    checked={schedule ? true : false}
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

              <div>
                {schedule ? (
                  <>
                    {schedule.map((data, index) => (
                      <div className="block mb-2">
                        <div className="flex items-center">
                          <input
                            onChange={(e) =>
                              startTimeHandler(e, data.id, name, data.endTime)
                            }
                            type="time"
                            class="h-10  px-1 mr-[2px] rounded-md border-2 border-gray-300"
                            value={data?.startTime}
                            name="startTime"
                          />
                          <span>-</span>
                          <input
                            onChange={(e) =>
                              endTimeHandler(e, data.id, name, data.startTime)
                            }
                            type="time"
                            class="h-10 px-1 ml-[2px] rounded-md border-2 border-gray-300"
                            value={data?.endTime}
                            name="timein"
                          />

                          <TbTrash
                            onClick={() => scheduleDeleteHandler(index, name)}
                            size={30}
                            className="ml-4 cursor-pointer p-1 hover:bg-gray-300 rounded-md"
                          />
                          <br />
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="text-sm font-medium text-gray-500">
                    Unavailable
                  </p>
                )}
              </div>
              <div className="flex items-center gap-x-4 text-gray-500">
                <AiOutlinePlus
                  onClick={() =>
                    addNewScheduleHandler(schedule[schedule.length - 1], name)
                  }
                  className="cursor-pointer hover:bg-gray-200 p-1 rounded-md"
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
      <div className="px-8  w-full">
        <p className=" font-semibold py-5">Add date overrides</p>
        <p className="text-sm text-gray-500">
          Add dates when your availability changes from your weekly hours
        </p>
        <button
          onClick={() => setOpen(true)}
          className=" p-1.5 px-4 border-blue-700 text-blue-700 rounded-full mx-auto my-6 border"
        >
          Add a date override
        </button>
        {/*  */}

        <p className="font-semibold text-md pb-4 uppercase">
          List of override Date
        </p>
        <hr className="mb-2" />
        {overrideList &&
          overrideList.map((info) => (
            <>
              <p className="pb-1 flex  items-center justify-between">
                {info.date}

                <TbTrash
                  onClick={() =>
                    deleteOverrideDateHandler(info.doctorId, info.id)
                  }
                  className="cursor-pointer hover:bg-gray-200 p-1 rounded-md text-gray-500"
                  size={40}
                />
              </p>
            </>
          ))}

        {open && (
          <CalendarModal
            setReloadOverride={setReloadOverride}
            reloadOverride={reloadOverride}
            overrideDate={overrideDate}
            open={open}
            setOpen={setOpen}
          />
        )}
        {/*  */}
      </div>
    </div>
  );
};

export default ManageAvailabilitiesView;
