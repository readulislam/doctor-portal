import axios from "axios";
import { Button, Card, Pagination } from "flowbite-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { BaseUrl, ListDepartments, ListStates } from "../../APi/api";
import Filtering from "../Filtering/Filtering";
import AppointmentRegistar from "../Form/AppoinmentRegistar/AppointmentRegistar";
import DoctorDetail from "../Modal/DoctorDetail";

const CardView = () => {
  const {userId} = useSelector(state => state.Auth)
  const [open, setOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [doctorId, setDoctorId] = useState("");
  const [doctorData, setDoctorData] = useState({});

  const [doctorDetailModal, setDoctorDetailModal] = useState(false);
  const [name, setName] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [departmentInput, setDepartmentInput] = useState("");

 

  useEffect(()=>{
    const fetching = async()=>{
      const {data} = await axios.get(`${BaseUrl}/get-doctors`,{
        
        params:{
          limit:8,
        offset:page
        }
      })
      console.log(data)
      const da =await ListStates()
      setDoctors(data.rows)
      setTotalPage(Math.ceil(data.count / 8) )
      console.log(Math.ceil(data.count / 8),'page')
      const d =await ListDepartments()
    }
    const fetchFilterData=async()=>{
      if(locationInput === 'Location' || departmentInput=== 'Speciality'){
        setLocationInput('');
        setDepartmentInput(''); 
      }
          const {data} = await axios.get(`${BaseUrl}/get-doctorFiltering`,{
      params:{limit:5, offset:page, name, locationInput,departmentInput}
          })
      if(!data.massage && data){
        setDoctors(data.rows)
        setTotalPage(Math.ceil(data.count / 8))
      }
      if(data.massage){
        toast.error(data.massage,{id:1})
      }
      console.log(locationInput,departmentInput,name,data)
    }
    if(name || locationInput || departmentInput){
      fetchFilterData()
    }
    else{
      fetching()
    }
  },[page])

 
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
  
  const handleSearch=async(event)=>{
   
    event.preventDefault();
    let locationvalue=event.target.hospital.value;
    let departmentValue=(event.target.department.value).toUpperCase();
    var nameValue=event.target.name.value;
    setLocationInput(event.target.hospital.value);
    setDepartmentInput((event.target.department.value).toUpperCase());
    setName(event.target.name.value);
    // refetch()
    // fetchFilterData()
    console.log(locationInput,departmentInput,name)
    if(locationInput === 'Location' || departmentInput=== 'Speciality'){
      setLocationInput('');
      setDepartmentInput(''); 
    }
        const {data} = await axios.get(`${BaseUrl}/get-doctorFiltering`,{
    params:{limit:5, offset:1, name:nameValue, locationInput:locationvalue,departmentInput:departmentValue}
        })
    if(!data.massage && data){
      setDoctors(data.rows)
      setTotalPage(Math.ceil(data.count / 8))
    }
    if(data.massage){
      toast.error(data.massage,{id:1})
    }
    console.log(locationInput,departmentInput,name,data)
        // event.target.reset()
      }

 
  return (
    <>
    <Filtering handleSearch={handleSearch}/>
        <div className="grid grid-cols-4 gap-y-10 gap-4  mt-16 place-items-center">
      
        {doctors.map((d) => (
          <div key={d.id} className="max-w-sm ">
            <Card className="p-0 m-0"
              
              
           
            >
              <img className="w-[334px] border cover rounded-lg h-[201px]" src={d.img} onClick={()=>{setDoctorDetailModal(true);setDoctorData(d);setDoctorId(d.id)}} alt='doctor'/>

              <h5 className="text-xl font-bold    text-gray-900 dark:text-white">
                {d.name}
              </h5>
              <p className="font-normal text-xs text-gray-500 dark:text-gray-400">
                {d.designation}
              </p>
              <p className="  text-gray-600 text-xs p-0 -mt-2 font-bold dark:text-gray-400">
                {d.hospital.name+','+d.hospital.address}
              </p>
              <hr/>
              <p className="font-normal text-gray-500 text-xs dark:text-gray-400">
                {d.department.name}
              </p>
              <div>
                <Button
                  onClick={() => {setOpen(true);setDoctorData(d);setDoctorId(d.id)}}
                  className="w-full rounded-full"
                  gradientDuoTone="cyanToBlue"
                >
                  Book an Appointment
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
      
     {open && <AppointmentRegistar doctorId={doctorId} doctorData={doctorData} open={open} setOpen={setOpen}  />}
      {doctorDetailModal && <DoctorDetail
      doctorData={doctorData}
      open={doctorDetailModal}
      setOpen={setDoctorDetailModal}
      />}
     <div className="w-full flex justify-center mt-6 mb-32">
     <Pagination
      currentPage={page}
      onPageChange={(e)=> setPage(e)}
      showIcons={true}
      totalPages={totalPage}
    />
     </div>
    </>
  );
};

export default CardView;
