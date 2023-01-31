import { isEmpty } from 'lodash';
import React from 'react'
import { useState } from 'react';
import Table, { heading } from '../../Common/Table'
import { AiFillEye, AiOutlineDownload } from "react-icons/ai";
import SearchBar from '../../Common/SearchBar';
import { useEffect } from 'react';
import { GetPatientDiseases } from '../../APi/api';
import { useSelector } from 'react-redux';
const data =['d']
const PatientDiseasesList = () => {
    const { userId } = useSelector((state) => state.Auth);


    useEffect(()=>{

        const dataFetching=async()=>{
            const data =  await GetPatientDiseases(userId)
            console.log(data)
        }
        dataFetching()
    },[userId])

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
          // !isEmpty(prescriptionData) &&
          // prescriptionData.map((data,index) => (
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
                  Readul Islam Riad
                </th>
                <td className="px-10 py-4">+8801758819483</td>
                <td className="px-10 py-4">11.00am</td>
                <td className="px-10 py-4">11.00am</td>
    
                <td className=" py-4">
                  <p className=" text-[#499AFA] flex items-center  dark:text-blue-500 hover:underline">
                    <a >
                      <AiFillEye
                        className="hover:text-red-400 cursor-pointer"
                        size={23}
                      />{" "}
                    </a>
                    <AiOutlineDownload
                      className="ml-1 cursor-pointer hover:text-red-400"
                      size={23}
                    />
                  </p>
                </td>
              </tr>
            </>
          // ))
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

    <SearchBar data={data} />
    </Table>
    
    </div>
  )
}

export default PatientDiseasesList