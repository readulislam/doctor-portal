import { Button, Label } from "flowbite-react";
import React, { useEffect, useState } from "react";
import {  ListDepartments, ListHospitals } from "../../APi/api";
import { department } from "../../Utils/mockData";

const Filtering = ({handleSearch}) => {
  
  const [searchDepartment, setsearchDepartment] = useState(null);
  const [searchHospital, setsearchHospital] = useState(null);
  const [hospitalList, setHospitalList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);
  const [name, setname] = useState();
  useEffect(() => {
    const fetching=async()=>{
      const {data}= await ListHospitals()
      setHospitalList(data)
    }
    fetching()
   
  }, [])
  useEffect(() => {
    const fetching=async()=>{
      const data= await ListDepartments()
      setDepartmentList(data)
    }
    fetching()
    
  }, [])
  const handleSubmit=()=>{
    handleSearch(searchDepartment,searchHospital,name)
  }
  return (
    <div >
      <div className=" grid grid-cols-4 gap-4 place-items-center mt-10">
        <input
          placeholder="Search"
          color="white"
          type="text"
          className=" border-t-0 w-52 px-2 border-r-0 border-l-0
        border-b-2 focus:outline-none focus:ring-0 border-gray-200 appearance-none"
        />
        <div className="w-80 ">
          <Label className="flex items-center gap-1">
            <span className="text-sm whitespace-nowrap">Filter by :</span>

              <select
                id="underline_select"
                className=" py-2.5  w-full  text-md  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                onChange={(e)=>{setsearchHospital(e.target.value)}}
              >
                <option selected>Location</option>
                {hospitalList?.map(h=><option>{h.name},{h.address}</option>)}
              </select>
          </Label>
        </div>
        <div className="w-52">
          <select
            id="underline_select"
            className=" py-2.5  w-full  text-md  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
            onChange={(e)=>{setsearchDepartment(e.target.value)}}
          >
            <option selected>Speciality</option>
           {departmentList?.map(d=><option>{d.name}</option>)}
              
          </select>
        </div>

        <div className="flex items-center gap-4">
          <Button onClick={handleSubmit} className="px-2 " gradientDuoTone="cyanToBlue">
            Search
          </Button>
          <Button color="gray">Reset</Button>
        </div>
      </div>
    </div>
  );
};

export default Filtering;
