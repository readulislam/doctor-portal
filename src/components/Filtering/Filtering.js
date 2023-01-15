import { Button, Label } from "flowbite-react";
import React, { useEffect, useState } from "react";
import {  ListDepartments, ListHospitals } from "../../APi/api";
import PrimaryButton from "../../Common/PrimaryButton";

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
  // const handleSubmit=()=>{
    // handleSearch(locationInput,departmentInput,name)
  // }
  return (
    <form onSubmit={handleSearch} >
      <div className=" items-center content-center container mx-auto flex justify-between my-5  ">
      <label for="table-search" className="sr-only">Search</label>
        <div className="relative ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text"
            name='name'
            id="table-search" className="block  p-2 pl-10 text-sm text-gray-900 border focus:outline-none border-gray-300 rounded-lg w-[280px]  bg-gray-50 focus:border-green-300/70 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
        </div>

         {/* <input 
         required={true} 
         name='name'
          type='text' placeholder="Search" 
          className="w-[190px] border-1 focus:border-gray-300 outline-none  focus:ring-0 rounded-md mr-2"
         
          /> */}
        <div className="w-80 ">
          <Label className="flex items-center gap-1">
         

              <select
              name='hospital'
                id="underline_select"
                className=" block  p-2 pl-10 text-sm text-gray-900 border focus:outline-none border-gray-300 rounded-lg w-[280px]  bg-gray-50 focus:border-green-300/70 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
              >
                <option selected>Location</option>
                {hospitalList?.map(h=><option value={h.id}>{h.name},{h.address}</option>)}
              </select>
          </Label>
        </div>
        <div className="w-52">
          <select
            id="underline_select"
            className=" block  p-2 pl-10 text-sm text-gray-900 border focus:outline-none border-gray-300 rounded-lg w-[280px]  bg-gray-50 focus:border-green-300/70 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name='department'
          >
            <option selected>Speciality</option>
           {departmentList?.map(d=><option value={d.id}>{d.name}</option>)}
              
          </select>
        </div>

        <div className="flex items-center gap-4">
         <PrimaryButton>
          Search
         </PrimaryButton>
        
        </div>
      </div>
    </form>
  );
};

export default Filtering;
