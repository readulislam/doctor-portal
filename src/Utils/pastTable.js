import axios from "axios";
import { Button, Pagination, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BaseUrl } from "../APi/api";
import TestReport from "../components/Modal/TestReport";
import { getAllAppointment } from "../Store/Doctor-Slice";
import Viewpres from "./Viewpres";

const PastTableView = ({ heading, data }) => {
  const [patientAppointment, setPatientAppointment] = useState([]);
  const [open, setOpen] = useState(false);
  const { doctorId, doctorInfo, appointments ,appointmentCount} = useSelector(
    (state) => state.Doctor
  );
  const { userId, userInfo } = useSelector((state) => state.Auth);
  const [openTestReport, setOpenTestReport] = useState(false);
  const [page, setPage] = useState(1);
  const [reportData, setReportData] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [doctorPage,setDoctorPage] = useState(1)
  const [reload, setReload] = useState(false);
  const [doctorData, setDoctorData] = useState([]);
  const dispatch = useDispatch();

  // const prescriptionfetch=async(id,dId,pId)=>{
  //   const {data}=await axios.get(`${BaseUrl}/get-prescriptionByPatientId?patientId=${pId}&doctorId=${dId}&appointmentId=${id}`)
  //   return data.link
  //   }
 
  useEffect(() => {
    const fetching = async () => {
      if (userId) {
        const { data } = await axios.get(`${BaseUrl}/patientAppointmentList`, {
          params: { patientId: userId, limit: 5, offset: page ,status:true},
        });
        setPatientAppointment(data.rows);
        setTotalPage(Math.ceil(data.count / 5));
      }

      if (doctorId) {
        await dispatch(getAllAppointment({doctorId:parseInt(doctorId), page:doctorPage}));
          setDoctorData([])
      }
    };
    fetching();
  }, [userId, page,doctorId,doctorPage]);
console.log("hi past",patientAppointment);

  
  return (
    <>
      {" "}
      <Table striped={true}>
        <Table.Head>
          {heading.map((head) => (
            <Table.HeadCell>{head}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y w-full">
          {doctorData &&
            doctorId &&
            doctorData?.map((d) => (
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {d?.patient?.firstName}
                </Table.Cell>
                <Table.Cell>{d?.date}</Table.Cell>
                <Table.Cell>{d?.time}</Table.Cell>
                
                <Viewpres id={d.id} doctorId={d.doctorId} patientId={d.patientId}/>
                
                <Table.Cell>
                    <Button onClick={()=>{setOpenTestReport(true);setReportData(d)}} >Report</Button>
                </Table.Cell>
              </Table.Row>
                ))}
          {patientAppointment &&
            userId &&
            patientAppointment.map((d,link) => 
              (
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {d?.doctor?.name}
                </Table.Cell>
                <Table.Cell>{d?.date}</Table.Cell>
                <Table.Cell>{d?.time}</Table.Cell>
                {/* <Table.Cell>
                <a href={link} target="_blank">
                  View
                  </a>
                  
                  
                </Table.Cell> */}
                <Viewpres id={d.id} doctorId={d.doctorId} patientId={d.patientId}/>
                <Table.Cell>
                    <Button onClick={()=>{setOpenTestReport(true);setReportData(d)}} >Report</Button>
                </Table.Cell>
              </Table.Row>
                )
              )}
        </Table.Body>
      </Table>
      {userId&& <div className="flex justify-end">
        <Pagination
          currentPage={page}
          onPageChange={(e) => setPage(e)}
          showIcons={true}
          totalPages={totalPage}
        />
      </div>}
      {doctorId&& 
      <div className="flex justify-end">
      <Pagination
        currentPage={doctorPage}
        onPageChange={(e) => setDoctorPage(e)}
        showIcons={true}
        totalPages={Math.ceil(appointmentCount/5)}
      />
    </div>
      }
      {/* {!appointments.length && <h2 className='text-3xl text-black py-10 font-semibold w-full text-center'>You haven't Appointments</h2>}   */}
      {openTestReport &&<TestReport
      setOpen={setOpenTestReport}
        open={openTestReport}
        reload={reload}
        setReload={setReload}
        reportData={reportData} setReportData={setReportData}
        />}
    </>
  );
};

export default PastTableView;

/* 
{!appointments.length | patientAppointment.length  && <h2 className='text-3xl text-black py-10 font-semibold w-full text-center'>You haven't Appointments</h2>}
*/
