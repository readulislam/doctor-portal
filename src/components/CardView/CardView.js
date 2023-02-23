import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Button, Card, Pagination } from "flowbite-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useSelector } from "react-redux";
import { BaseUrl, ListDepartments, ListStates } from "../../APi/api";
import Filtering from "../Filtering/Filtering";
import DoctorDetail from "../Modal/DoctorDetail";
import useReactQuery from "../../hooks/useReactQuery";

import AppointmentBooking from "../AppointmentBooking";
import BillReceipt from "../Modal/BillReceipt";

const CardView = () => {
  const [openBillReceipt, setOpenBillReceipt] = useState(false);
  const { userId } = useSelector((state) => state.Auth);
  const [open, setOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [doctorId, setDoctorId] = useState("");
  const [doctorData, setDoctorData] = useState({});
  const [appointment, setAppointment] = useState({});
  const [doctorDetailModal, setDoctorDetailModal] = useState(false);
  const [name, setName] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [departmentInput, setDepartmentInput] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`${BaseUrl}/get-doctors`, {
        params: {
          limit: 8,
          offset: page,
        },
      });
      console.log(data)
      const da = await ListStates();
      setDoctors(data.rows);
      setTotalPage(Math.ceil(data.count / 8));
      const d = await ListDepartments();
    };
    const fetchFilterData = async () => {
      
      const { data } = await axios.get(`${BaseUrl}/get-doctorFiltering`, {
        params: {
          limit: 5,
          offset: page,
          name,
          locationInput,
          departmentInput,
        },
      });
      if (!data.massage && data) {
        setDoctors(data.rows);
      
        setTotalPage(Math.ceil(data.count / 5));
      }
      if (data.massage) {
        toast.error(data.massage, { id: 1 });
      }
    };
    if (name || locationInput || departmentInput) {
      fetchFilterData();
    } else {
      fetching();
    }
  }, [page,reload]);

  // const {
  //   isIdle,
  //   isLoading,
  //   isError,
  //   data,
  //   error,
  //   refetch,
  //   isFetching,
  // } = useQuery('filter', ()=>{
  //   if(name || locationInput || departmentInput){
  //     fetchFilterData()
  //   }
  //   else{
  //     fetching()
  //   }
  // }, {

  // })
  console.log(departmentInput,"fAAA",locationInput,"dskd");

  const handleSearch = async (values, { resetForm }) => {

    let locationvalue = values.hospital!=="location"?(values.hospital!==""?(values.hospital):(locationInput)):("");
    let departmentValue = values.department!=="Speciality"?(values.department!==""?(values.department):(departmentInput)):("");
    let nameValue = values.name;
    console.log(values.department,"fsf",locationvalue,"dsd");

    setDepartmentInput(departmentValue)
    setLocationInput(locationvalue)

  


    setName(nameValue);
    
    if (nameValue || departmentValue || locationvalue) {
      const { data } = await axios.get(`${BaseUrl}/get-doctorFiltering`, {
        params: {
          limit: 8,
          offset: 1,
          name: nameValue,
          locationInput: locationvalue,
          departmentInput: departmentValue,
        },
      });
      if (!data.massage && data) {
        setDoctors(data.rows);
        setTotalPage(Math.ceil(data.count / 8));
      }
      if (data.massage) {
        toast.error(data.massage, { id: 1 });
       }
    }else{
      setReload(!reload)
    }

    
    // event.target.reset()
    resetForm();
  };

  return (
    <>
      <Filtering handleSearch={handleSearch} />
      <div className="grid container mx-auto md:grid-cols-2   xl:grid-cols-4 xl:gap-x-20   gap-y-10   mt-16 place-items-center">
        {doctors.map((d) => (
          <div key={d.id} className="max-w-xs  ">
            <Card className="p-0 m-0 h-[450px] dark:bg-accent">
              <img
                className="w-[334px] border cover rounded-lg h-[201px]"
                src={`${BaseUrl}/${d.img}`}
                onClick={() => {
                  setDoctorDetailModal(true);
                  setDoctorData(d);
                  setDoctorId(d.id);
                }}
                alt="doctor"
              />

              <h5 className="text-xl font-bold    text-gray-900 dark:text-white">
                {d.name}
              </h5>
              <p className="font-normal text-xs text-gray-500 dark:text-gray-400">
                {d.designation}
              </p>
              <p className="  text-gray-600 text-xs p-0 -mt-2 font-bold dark:text-gray-400">
                {d.hospital.name + "," + d.hospital.address}
              </p>
              <hr />
              <p className="font-normal text-gray-500 text-xs dark:text-gray-400">
                {d.department.name}
              </p>
              <div>
                <Button
                  onClick={() => {
                    setOpen(true);
                    setDoctorData(d);
                    setDoctorId(d.id);
                  }}
                  className="w-full rounded-xl !p-0 "
                  gradientDuoTone="cyanToBlue"
                >
                  Book an Appointment
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {open && (
        <AppointmentBooking
          doctorId={doctorId}
          doctorData={doctorData}
          open={open}
          setOpen={setOpen}
          setOpenBillReceipt={setOpenBillReceipt}
          setAppointment={setAppointment}
          appointment={appointment}
        />
      )}
      {doctorDetailModal && (
        <DoctorDetail
          doctorData={doctorData}
          open={doctorDetailModal}
          setOpen={setDoctorDetailModal}
        />
      )}
      <div className="w-full flex justify-center mt-6 pb-20">
        <Pagination
          currentPage={page}
          onPageChange={(e) => setPage(e)}
          showIcons={true}
          totalPages={totalPage}
        />
      </div>
      {openBillReceipt && (
        <BillReceipt
          open={openBillReceipt}
          setOpen={setOpenBillReceipt}
          doctorData={doctorData}
          appointment={appointment}
        />
      )}
    </>
  );
};

export default CardView;
