import axios from "axios";
import { Button, Card, Pagination } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BaseUrl, ListDepartments, ListStates } from "../../APi/api";
import Filtering from "../Filtering/Filtering";
import AppointmentRegistar from "../Form/AppoinmentRegistar/AppointmentRegistar";

const CardView = () => {
  const {userId} = useSelector(state => state.Auth)
  const [open, setOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [modalName, setModalName] = useState("");
  const [modalSpeciality, setModalSpeciality] = useState("");
  const [modalLocation, setModalLocation] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [doctorData, setDoctorData] = useState({});
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
    fetching()
  },[page])
  console.log(page)
  const handleSearch=async(searchDepartment,searchHospital,name)=>{
    if (searchDepartment!==null) {
       const {data} = await axios.get(`${BaseUrl}/get-doctorBySearch?departmentId=${searchDepartment}&hospitalId=${searchHospital}&name=${name}`)
    }
  }
 
  return (
    <>
    <Filtering handleSearch={handleSearch}/>
      <div className="grid grid-cols-4 gap-y-10 gap-4  mt-16 place-items-center">
        {doctors.map((d) => (
          <div key={d.id} className="max-w-sm ">
            <Card className="p-0 m-0"
              
              
           
            >
              <img className="w-[334px] border cover rounded-lg h-[201px]" src={d.img} alt='doctor'/>

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
                  onClick={() => {setOpen(true);setDoctorData(d);setDoctorId(d.id);setModalName(d.name);setModalLocation(d.hospital.name+','+d.hospital.address);setModalSpeciality(d.department.name)}}
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
      <AppointmentRegistar doctorId={doctorId} doctorData={doctorData} open={open} setOpen={setOpen} name={modalName} speciality={modalSpeciality} location={modalLocation} />
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
