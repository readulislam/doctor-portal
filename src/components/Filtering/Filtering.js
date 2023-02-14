import { Button, Label } from "flowbite-react";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {  ListDepartments, ListHospitals } from "../../APi/api";
import PrimaryButton from "../../Common/PrimaryButton";

const Filtering = ({handleSearch}) => {
  
  const initialValues={
    name:'',
    hospital:'',
    department:'',
  }
  const [hospitalList, setHospitalList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);
  
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

  return (

    <Formik
    initialValues={initialValues}
    onSubmit={handleSearch}
    // enableReinitialize={isDataEmpty}
    // validationSchema={EditLocationError}
    >
      {({ handleSubmit, isSubmitting, setFieldValue }) => (
      <>  
    <form autoComplete="off" onSubmit={handleSubmit} >
      <div className=" items-center grid md:grid-cols-2 justify-center content-center container mx-auto flex-col xl:flex-row gap-y-4 xl:gap-y-0 justify-items-center xl:flex xl:justify-between my-5  ">

      <label for="table-search" className="sr-only">Search</label>
        <div className="relative ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text"
            name='name'
            id="table-search" className="block  p-2 pl-10 text-sm text-gray-900 dark:border dark:border-gray-700 border-gray-300  focus:outline-none  rounded-lg w-[280px]  bg-gray-50 focus:border-green-300/70 focus:ring-0 dark:bg-accent  dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-700 dark:focus:border-gray-700" placeholder="Search for items"/>
        </div>

         {/* <input 
         required={true} 
         name='name'
          type='text' placeholder="Search" 
          className="w-[190px] border-1 focus:border-gray-300 outline-none  focus:ring-0 rounded-md mr-2"
         
          /> */}
        <div className=" ">
        
         

              <select
              name='hospital'
                id="underline_select"
                className=" block  p-2 pl-10 text-sm text-gray-900 dark:border dark:border-gray-700 border-gray-300  focus:outline-none  rounded-lg w-[280px]  bg-gray-50 focus:border-green-300/70 focus:ring-0 dark:bg-accent  dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-700 dark:focus:border-gray-700"
                onChange={(e)=>{setFieldValue("hospital",e.target.value)}}
              >
                <option selected>Location</option>
                {hospitalList?.map(h=><option value={h.id}>{h.name},{h.address}</option>)}
              </select>
         
        </div>
        <div className="">
          <select
            id="underline_select"
            className=" block  p-2 pl-10 text-sm text-gray-900 dark:border dark:border-gray-700 border-gray-300  focus:outline-none  rounded-lg w-[280px]  bg-gray-50 focus:border-green-300/70 focus:ring-0 dark:bg-accent  dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-700 dark:focus:border-gray-700"
            name='department'
            onChange={(e)=>{setFieldValue("department",e.target.value)}}
          >
            <option selected>Speciality</option>
           {departmentList?.map(d=><option value={d.id}>{d.name}</option>)}
              
          </select>
        </div>

        <div className="flex items-center gap-4">
         <PrimaryButton type='submit' >
          Search
         </PrimaryButton>
        
        </div>
      </div>
    </form>
    </>
        )}
      </Formik>
  );
};

export default Filtering;
