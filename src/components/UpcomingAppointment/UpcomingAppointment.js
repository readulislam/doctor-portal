import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { heading } from "../../Common/Table";
import { getAllAppointment } from "../../Store/Doctor-Slice";
import TotalPageCounter from "../../Utils/TotalPageCounter";
import TreatmentDetail from "../TreatmentDetail";
import UpcomingAppointmentView from "./UpcomingAppointmentView";
import { FaTrashAlt } from "react-icons/fa";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
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
    };
    fetchUserAppointment();
  }, [page, cancel, userId]);

  const appointmentCancelHandler = async (data) => {
    const { id, doctorId, timeSlot, timeSlotId, date } = data;
const confirmation = window.confirm('Are you want to Delete this Appointment ?')
if(confirmation){
  const deleteAppointment = await CancelAppointment(id);
  const timeSlotInfo = await GetSlotByData({ doctorId, date });
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
  }
}
    
  };


  const downloadBill=(doctorData, patient,appointment)=>{
    const doc=new jsPDF('landscape','px','a4','false')
    doc.setFillColor(240, 253,244)
    doc.rect(0,0,650,600,"F")
    doc.setFontSize(16)
    doc.setFont("","","bold")
    doc.text((doctorData.hospital.name).toUpperCase(),250,30)

    doc.setFontSize(12)
    doc.setFont("","","normal")
    doc.text(`ReceiptNumber :${''}`,400,50)
    doc.setDrawColor("#457cb1")
    doc.setLineWidth(5)
    doc.line(20,10,610,10)
    doc.setLineWidth(2)
    doc.line(35,70,35,145)
    doc.setLineWidth(2)
    doc.line(390,70,390,145)
    doc.setTextColor("#457cb1")
    doc.setFont("","","bold")
    doc.setFontSize(16)
    doc.text('PATIENT INFORMATION',40,80)
    doc.text('DOCTOR INFO',400,80)
    doc.setTextColor("#1e1e1e")

    doc.text(`Name :  ${doctorData.name}`,400,95)
    
    doc.text(`Name : ${(patient?.firstName).toUpperCase()}  ${(patient?.lastName).toUpperCase()}`,40,95)

    doc.setFontSize(12)
    doc.setFont("","","normal")
    doc.text(`Contact : ${doctorData.contactNo}`,400,110)
    doc.text(`Speciality : ${doctorData.department.name}`,400,125)
    doc.text(`Hospital location : ${doctorData.hospital.address}`,400,140)
    doc.text(`Contact : ${patient?.contact}`,40,110)
    doc.text(`address : ${patient?.address}`,40,125)
    doc.text(`city,state : ${patient?.city} , ${patient?.state}`,40,140)
    //Appointment Detail
    
    doc.setLineWidth(1)
    
    doc.line(35,170,580,170)

   
    doc.text('Appointment number',40,180)
    doc.text(`${''}`,40,195)

    

    doc.text('date',300,180)
    doc.text(appointment?.date,300,195)

    

    doc.text('time',490,180)
    doc.text(appointment?.time,490,195)

    doc.line(35,200,580,200)
    
    
    autoTable(doc, {
      startY:230,
      head: [['Code','Descrition of Service', 'Rate','total']],
      body: [
        ['101','Consultation Charge', (appointment.appointmentType==="Regular") ?(doctorData.basicCharges):(doctorData.followupCharges),'800'],
        [],
        [],
        [],
        [],
        ['','','','total = 800']
        // ...
      ], 
      margin: { horizontal: 20 },
      styles: { overflow: 'linebreak',cellPadding:5 ,fontSize:14},
      bodyStyles: { valign: 'top' },
      columnStyles: { total: { columnWidth: 'wrap' } },
      theme: "striped"
    })
    // doc.text('total = 800',530,410)
    
    doc.save('bil.pdf')
  }
 
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
                  onClick={()=>downloadBill(data.doctor, data.patient,data)}
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
