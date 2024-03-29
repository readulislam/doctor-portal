import axios from "axios";
import { Button, Pagination, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BaseUrl } from "../APi/api";
import TestReport from "../components/Modal/TestReport";
import UploadPrescription from "../components/Modal/UploadPrescription";
import { getAllAppointment } from "../Store/Doctor-Slice";

const TableView = ({ heading, data }) => {
  const [patientAppointment, setPatientAppointment] = useState([]);
  const [open, setOpen] = useState(false);
  const { doctorId, doctorInfo, appointments, appointmentCount } = useSelector(
    (state) => state.Doctor
  );
  const { userId, userInfo } = useSelector((state) => state.Auth);
  const [page, setPage] = useState(1);
  const [prescriptionData, setprescriptionData] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [doctorPage, setDoctorPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetching = async () => {
      if (userId) {
        const { data } = await axios.get(`${BaseUrl}/patientAppointmentList`, {
          params: { patientId: userId, limit: 5, offset: page, status: false },
        });
        setPatientAppointment(data.rows);
        setTotalPage(Math.ceil(data.count / 5));
      }

      if (doctorId) {
        dispatch(
          getAllAppointment({
            doctorId: parseInt(doctorId),
            page: doctorPage,
            status: false,
          })
        );
      }
    };
    fetching();
  }, [userId, page, doctorId, doctorPage]);

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
          {appointments &&
            doctorId &&
            appointments?.map((d) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {d?.patient?.firstName}
                </Table.Cell>
                <Table.Cell>{d?.date}</Table.Cell>
                <Table.Cell>{d?.time}</Table.Cell>
                <Table.Cell>
                  {/* {d?.prescription} */}
                  <Button
                    onClick={() => {
                      setOpen(true);
                      setprescriptionData(d);
                    }}
                  >
                    Upload
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          {patientAppointment &&
            userId &&
            patientAppointment.map((d, link) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {d?.doctor?.name}
                </Table.Cell>
                <Table.Cell>{d?.date}</Table.Cell>
                <Table.Cell>{d?.time}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
      {userId && (
        <div className="flex justify-end">
          <Pagination
            currentPage={page}
            onPageChange={(e) => setPage(e)}
            showIcons={true}
            totalPages={totalPage}
          />
        </div>
      )}
      {doctorId && (
        <div className="flex justify-end">
          <Pagination
            currentPage={doctorPage}
            onPageChange={(e) => setDoctorPage(e)}
            showIcons={true}
            totalPages={Math.ceil(appointmentCount / 5)}
          />
        </div>
      )}
      {/* {!appointments.length && <h2 className='text-3xl text-black py-10 font-semibold w-full text-center'>You haven't Appointments</h2>}   */}
      <UploadPrescription
        open={open}
        setOpen={setOpen}
        prescriptionData={prescriptionData}
        setprescriptionData={setprescriptionData}
      />
    </>
  );
};

export default TableView;

/* 
{!appointments.length | patientAppointment.length  && <h2 className='text-3xl text-black py-10 font-semibold w-full text-center'>You haven't Appointments</h2>}
*/
