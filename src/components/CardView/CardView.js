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

const CardView = () => {
  const { userId } = useSelector((state) => state.Auth);
  const [open, setOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [doctorId, setDoctorId] = useState("");
  const [doctorData, setDoctorData] = useState({});

  const [doctorDetailModal, setDoctorDetailModal] = useState(false);
  const [name, setName] = useState("");
  const [locationInput, setLocationInput] = useState(null);
  const [departmentInput, setDepartmentInput] = useState(null);

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`${BaseUrl}/get-doctors`, {
        params: {
          limit: 8,
          offset: page,
        },
      });
      console.log(data);
      const da = await ListStates();
      setDoctors(data.rows);
      setTotalPage(Math.ceil(data.count / 8));
      console.log(Math.ceil(data.count / 8), "page");
      const d = await ListDepartments();
    };
    const fetchFilterData = async () => {
      if (locationInput === "Location" || departmentInput === "Speciality") {
        setLocationInput("");
        setDepartmentInput("");
      }
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
      
        setTotalPage(Math.ceil(data.count / 8));
      }
      if (data.massage) {
        toast.error(data.massage, { id: 1 });
      }
      console.log(locationInput, departmentInput, name, data);
    };
    if (name || locationInput || departmentInput) {
      fetchFilterData();
    } else {
      fetching();
    }
  }, [page]);

  console.log(doctors);
  // const {
  //   isIdle,
  //   isLoading,
  //   isError,
  //   data,
  //   error,
  //   refetch,
  //   isFetching,
  // } = useQuery('filter', ()=>{
  //   console.log(page,"dsds");
  //   if(name || locationInput || departmentInput){
  //     fetchFilterData()
  //   }
  //   else{
  //     fetching()
  //   }
  // }, {

  // })

  const handleSearch = async (values, { resetForm }) => {
    console.log(values.hospital, values.department);

    let locationvalue = values.hospital;
    let departmentValue = values.department;
    let nameValue = values.name;
    console.log(typeof locationvalue, typeof departmentValue, nameValue);
    // if (departmentValue) {
    //   departmentValue=parseInt(departmentValue);
    // }
    // if (locationvalue) {
    //   locationvalue =parseInt(locationvalue);
    // }

    setName(nameValue);
    // console.log(locationInput,departmentInput,name)
    // if(locationInput === 'Location' || departmentInput=== 'Speciality'){
    //   setLocationInput('');
    //   setDepartmentInput('');
    // }

    const { data } = await axios.get(`${BaseUrl}/get-doctorFiltering`, {
      params: {
        limit: 5,
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
    console.log(locationInput, departmentInput, name, data);
    // event.target.reset()
    resetForm();
  };

  return (
    <>
      <Filtering handleSearch={handleSearch} />
      <div className="grid container mx-auto md:grid-cols-2   xl:grid-cols-4 xl:gap-x-20   gap-y-10   mt-16 place-items-center">
        {doctors.map((d) => (
          <div key={d.id} className="max-w-xs  ">
            <Card className="p-0 m-0">
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
        />
      )}
      {doctorDetailModal && (
        <DoctorDetail
          doctorData={doctorData}
          open={doctorDetailModal}
          setOpen={setDoctorDetailModal}
        />
      )}
      <div className="w-full flex justify-center mt-6 mb-32">
        <Pagination
          currentPage={page}
          onPageChange={(e) => setPage(e)}
          showIcons={true}
          totalPages={totalPage}
        />
      </div>

    </>
  );
};

export default CardView;
