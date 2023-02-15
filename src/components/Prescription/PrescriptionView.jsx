import { isEmpty } from "lodash";
import React, { useState } from "react";
import { AiFillEye, AiOutlineDownload } from "react-icons/ai";
import { useSelector } from "react-redux";
import { BaseUrl } from "../../APi/api";
import PrimaryButton from "../../Common/PrimaryButton";
import Table from "../../Common/Table";

const heading = ["No", "Date", "Time", "Action"];
const data = ['No', 'FollowUP Date','date','action'];
const PrescriptionView = ({
  setDate,
  setImage,
  setPage,
  page,
  handleSubmit,
  prescriptionData,
}) => {

  const {doctorId} = useSelector(state => state.Doctor)
  const TableHeader = () => {
    return (
      !isEmpty(data) &&
      data.map((name, index) => (
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
  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today =  yyyy+ '-' + mm + '-' + dd ;
 

console.log(prescriptionData)
const handlePrint=()=>{
  window.open(`${BaseUrl}/${prescriptionData?.link}`, "PRINT", "height=400,width=600");
}

  const TableRowData = () => {
    return (
      !isEmpty(prescriptionData) &&
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
              {1}
            </th>
            <td className="px-10 py-4">{prescriptionData?.followUpDate?prescriptionData?.followUpDate:'---' }</td>
            <td className="px-10 py-4">{today}</td>
           

            <td className=" py-4">
              <p className=" text-[#499AFA] flex items-center  dark:text-blue-500 hover:underline">
                <a href={`${BaseUrl}/${prescriptionData?.link}`} target="_blank">
                  <AiFillEye
                    className="hover:text-red-400 cursor-pointer"
                    size={23}
                  />{" "}
                </a>
                <AiOutlineDownload
                  className="ml-1 cursor-pointer hover:text-red-400"
                  size={23}
                />
                <button onClick={handlePrint}> print</button>
              </p>
            </td>
          </tr>
        </>

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
    <div className="">
      <span className="mb-2  text-lg font-semibold">Prescription</span>
  <div className="  py-3 flex  items-center content-center justify-between">
        {doctorId && <>
        
        
          <label class="block max-w-sm">
          <span class="sr-only">Choose File</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            class="block w-full border-none rounded-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </label>
        <span>
          <input
            required={true}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="date"
            className="max-w-[250px] border-1 focus:border-gray-300 outline-none  focus:ring-0 rounded-md mr-2"
          />
          <PrimaryButton
            handleSubmit={handleSubmit}
            type={"button"}
            isBg={"!bg-gray-700 "}
          >
            Add
          </PrimaryButton>
        </span>
        </>}
      </div>

      <Table props={props}></Table>
    </div>
  );
};

export default PrescriptionView;
