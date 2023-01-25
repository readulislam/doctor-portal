import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { heading } from "../../Common/Table";
import { getAllAppointment } from "../../Store/Doctor-Slice";
import TotalPageCounter from "../../Utils/TotalPageCounter";
import TreatmentDetail from "../TreatmentDetail";
import PreviousAppointmentView from "./PreviousAppointmentView";
import { AiFillEye ,AiOutlineDownload} from 'react-icons/ai';
import axios from "axios";
import { BaseUrl } from "../../APi/api";

const PreviousAppointment = () => {
  const[selectedPatient, setSelectedPatient] = useState({})
  const dispatch = useDispatch();
  const [open,setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
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
          status: true,
          limit
        })
      );
    }
  }, [doctorId, dispatch, page,limit]);
  useEffect(() => {
    const fetchUserAppointment = async () => {
      if (userId) {
        const { data } = await axios.get(`${BaseUrl}/patientAppointmentList`, {
          params: { patientId: userId, limit: 5, offset: page, status: true },
        });
        setPatientAppointment(data.rows);
      }
    };
    fetchUserAppointment();
  }, [page]);

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

  console.log(appointments);

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
              <p onClick={()=>{
                setOpen(true)
                setSelectedPatient(data)}} className=" text-[#499AFA] flex items-center  dark:text-blue-500 hover:underline">
                 <AiFillEye className="hover:text-red-400 cursor-pointer" size={23}/> 
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
              <p onClick={()=>{
                setOpen(true)
                setSelectedPatient(data)}} className=" text-[#499AFA] flex items-center  dark:text-blue-500 hover:underline">
                 <AiFillEye className="hover:text-red-400 cursor-pointer" size={23}/> 
                </p>
              </td>
            </tr>
          </>
        ))
      );
    }
    
  };
  const totalPage = TotalPageCounter(appointmentCount, limit);
console.log(open);
  const props = {
    page,
    setPage,
    TableRowData,
    TableHeader,
    totalPage,
    setSelectedPatient,
    appointments,

  };
  return (
    <>
      <PreviousAppointmentView props={props} />
    {(selectedPatient && open) &&   <TreatmentDetail selectedPatient={selectedPatient} setOpen={setOpen} open={open}/>}
    </>
  );
};

export default PreviousAppointment;
