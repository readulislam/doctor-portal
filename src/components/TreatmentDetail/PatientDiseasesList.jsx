import { isEmpty } from 'lodash';
import React from 'react'
import { useState } from 'react';
import Table from '../../Common/Table'
import { AiFillEye, AiOutlineDownload } from "react-icons/ai";
import SearchBar from '../../Common/SearchBar';
import { useEffect } from 'react';
import { GetAppointmentByDiseases, GetPatientDiseases } from '../../APi/api';
import { useSelector } from 'react-redux';
import { computeHeadingLevel } from '@testing-library/react';
// const data =['d']
const heading = ['Doctor Name', 'Disease', 'Date', 'Appointment Type','Action']
const PatientDiseasesList = ({patient,setOpenDiseaseDetail,setSelectedDiseaseAppointment}) => {
    // const { userId } = useSelector((state) => state.Auth);
    const [data,setData]= useState([]);
    const [appointments,setAppointments] =useState([])
    const [selectedMenu,setSelectedMenu] = useState(data[0]);
    console.log(selectedMenu)
// const diseaseFilterData = []
    useEffect(()=>{

        const dataFetching=async()=>{
            const diseases =  await GetPatientDiseases(patient.id)
            console.log(diseases)
         const newDiseases = diseases.map((d)=> d.diseaseName)
         console.log(newDiseases)

         setData(newDiseases)
}
        dataFetching()
       
    },[patient])


    useEffect(()=>{

      const fetching =async ()=>{
        if(selectedMenu){
          const appointment = await GetAppointmentByDiseases({patientId:patient.id,diseaseName:selectedMenu});
          setAppointments(appointment.rows)
          console.log(appointment.rows)
         }
      }
      fetching()
    },[selectedMenu])
    // console.log(diseaseFilterData)
    const [page,setPage] = useState(1);

    const TableHeader = () => {
        return (
          !isEmpty(heading) &&
          heading.map((name, index) => (
            <th
              key={index}
              scope="col"
              className={`
             ${heading.length - 1 === index ? "py-3" : "pl-10  py-3"}`}
            >
              {name}
            </th>
          ))
        );
      };

      const TableRowData = () => {
        return (
          !isEmpty(appointments) &&
          appointments.map((data,index) => (
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
                  className="px-10 py-4 uppercase font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                {data.doctor.name}
                </th>
                <td className="px-10 py-4">{data.diseaseName}</td>
                <td className="px-10 py-4">{data.date}</td>
                <td className="px-10 py-4">{data.appointmentType}</td>
    
                <td className=" py-4">
                  <p className=" text-[#499AFA]    dark:text-blue-500 hover:underline">
                    <a >
                      <AiFillEye
                      onClick={()=>{setOpenDiseaseDetail(true)
                      
                        setSelectedDiseaseAppointment(data)
                      }}
                        className="hover:text-red-400 cursor-pointer"
                        size={23}
                      />{" "}
                    </a>
                   
                  </p>
                </td>
              </tr>
            </>
          ))
        );
      };
     const props = {
        page,
        setPage,
        TableRowData,
        TableHeader,
        totalPage: 1,
      };
  return (
    <div className='py-20'>
    
    
    <Table props={props}>

    <SearchBar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} data={data} />
    </Table>
    
    </div>
  )
}

export default PatientDiseasesList