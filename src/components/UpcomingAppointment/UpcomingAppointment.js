import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { heading } from "../../Common/Table";
import { getAllAppointment } from "../../Store/Doctor-Slice";
import TotalPageCounter from "../../Utils/TotalPageCounter";
import TreatmentDetail from "../TreatmentDetail";
import UpcomingAppointmentView from "./UpcomingAppointmentView";
import { FaTrashAlt } from "react-icons/fa";

import { AiFillEye, AiOutlineDownload } from "react-icons/ai";
import axios from "axios";
import {
  BaseUrl,
  CancelAppointment,
  GetSlotByData,
  updateTimeSlot,
} from "../../APi/api";

const UpcomingAppointment = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [cancel, setCancel] = useState(false);
  const [limit, setLimit] = useState(8);
  const [reReload, setReReload] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState({});
  const [patientAppointment, setPatientAppointment] = useState([]);
  const { doctorId, doctorInfo, appointments, appointmentCount } = useSelector(
    (state) => state.Doctor
  );
  const { userId } = useSelector((state) => state.Auth);

  useEffect(() => {
    if (doctorId) {
      dispatch(
        getAllAppointment({
          doctorId: parseInt(doctorId),
          page: page,
          status: false,
          limit,
        })
      );
    }
  }, [doctorId, dispatch, page, limit, reReload]);

  useEffect(() => {
    const fetchUserAppointment = async () => {
      if (userId) {
        const { data } = await axios.get(`${BaseUrl}/patientAppointmentList`, {
          params: { patientId: userId, limit: 5, offset: page, status: false },
        });
        setPatientAppointment(data.rows);
      }
      console.log(cancel);
    };
    fetchUserAppointment();
  }, [page, cancel, userId]);

  const appointmentCancelHandler = async (data) => {
    const { id, doctorId, timeSlot, timeSlotId, date } = data;
const confirmation = window.confirm('Are you want to Delete this Appointment ?')
if(confirmation){
  console.log(data);
  const deleteAppointment = await CancelAppointment(id);
  const timeSlotInfo = await GetSlotByData({ doctorId, date });
  console.log(timeSlotInfo);
  console.log(deleteAppointment);
  setCancel(!cancel);
  if (timeSlotInfo) {
    const query = {
      doctorId,
      timeRange: timeSlotInfo.timeRange,
      slotId: timeSlotId,
      date: timeSlotInfo.date,
      weekday: timeSlotInfo.weekday,
      isAvailable: true,
    };
    const update = await updateTimeSlot(query);
    console.log(update);
  }
}
    
  };

  const TableHeader = () => {
    return (
      !isEmpty(heading) &&
      heading.map((name, index) => (
        <th key={index} scope="col" className="px-6 py-3">
          {name}
        </th>
      ))
    );
  };
  console.log(patientAppointment);

  const TableRowData = () => {
    if (doctorId) {
      return (
        !isEmpty(appointments) &&
        appointments.map((data) => (
          <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-2" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 uppercase font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {data.patient.firstName + " " + data.patient.lastName}
              </th>
              <td className="px-6 py-4">{data.patient.contact}</td>
              <td className="px-6 py-4">{data.time}</td>
              <td className="px-6 py-4">{data.date}</td>
              <td className="px-6 py-4">
                <p
                  onClick={() => {
                    setSelectedPatient(data);
                    setOpen(true);
                  }}
                  className=" text-[#499AFA] flex items-center  dark:text-blue-500 hover:underline"
                >
                  <AiFillEye
                    className="hover:text-red-400 cursor-pointer"
                    size={23}
                  />
                </p>
              </td>
            </tr>
          </>
        ))
      );
    }

    if (userId) {
      return (
        !isEmpty(patientAppointment) &&
        patientAppointment.map((data) => (
          <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-2" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 uppercase font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {data.doctor?.name}
              </th>
              <td className="px-6 py-4">{data.doctor.contactNo}</td>
              <td className="px-6 py-4">{data.time}</td>
              <td className="px-6 py-4">{data.date}</td>
              <td className="px-6 py-4">
                <span className="flex  items-center gap-2">
                  <AiOutlineDownload
                    className="cursor-pointer hover:text-red-400"
                    title="Download Details"
                    size={22}
                  />{" "}
                  <FaTrashAlt
                    onClick={() => appointmentCancelHandler(data)}
                    title="Delete Appointment"
                    className="cursor-pointer hover:text-red-400"
                    size={22}
                  />
                </span>
              </td>
            </tr>
          </>
        ))
      );
    }
  };
  const totalPage = TotalPageCounter(appointmentCount, limit);

  let props = {
    page,
    setPage,
    TableRowData,
    TableHeader,
    totalPage,

    appointments,
  };

  return (
    <>
      <UpcomingAppointmentView props={props} />
      {selectedPatient && open && (
        <TreatmentDetail
          reReload={reReload}
          setReReload={setReReload}
          selectedPatient={selectedPatient}
          setOpen={setOpen}
          open={open}
        />
      )}
    </>
  );
};

export default UpcomingAppointment;
