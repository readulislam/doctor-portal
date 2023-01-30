import axios from "axios";
import { Button, Label, Modal, Radio, Textarea } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { BaseUrl, ListDiseases, PostReport } from "../../APi/api";
import InputField from "../../Common/InputField";
import ModelViewWrapper from "./ModelViewWrapper";
const d = [
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
];

const appointType = ["Regular", "Follow Up"];
const AppointmentDiseases = ({ open, setOpen, doctorData,setOtherDisease,selectedDisease,otherDisease,setSelectedDisease, doctorId,handleDiseaseSubmit }) => {
  const [disease, setDisease] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const {data}=await ListDiseases(doctorData.departmentId)
      // const { data } = await ListDiseases(2);
      setDisease(data);
    };
    fetch();
  }, []);

  console.log(disease);

  

  const props = {
    open: open,
    setOpen:setOpen,
    handleSubmit:handleDiseaseSubmit,
  };
  return (
    <React.Fragment>
      <ModelViewWrapper
        PrimaryButtonTitle={"next"}
        PrimaryButtonType="submit"
        modalHeaderTitle={"Select your Disease"}
        props={props}
      >
        <div className="grid  md:grid-cols-2 xl:grid-cols-3 gap-4 items-center ">
          {disease.map((data, index) => (
            <>
              {/* "bg-blue-600 text-white" */}
              <p
                onClick={() => setSelectedDisease(data)}
                key={index}
                className={`${
                  selectedDisease.id === data.id && "bg-blue-600 text-white"
                } bg-white hover:bg-sky-500 hover:text-white shadow-sm rounded-full font-serif font-[500]  text-gray-700 cursor-pointer text-center py-2`}
              >
                {data.name}
              </p>
            </>
          ))}
        </div>

        <div className="pt-6">
          {!otherDisease ? (
            <p
              onClick={() => setOtherDisease(true)}
              className="bg-white hover:bg-sky-500 hover:text-white shadow-sm rounded-full font-serif font-[500]  max-w-[263px] text-gray-700 cursor-pointer text-center py-2"
            >
              Others
            </p>
          ) : (
            <>
              <label>
                <span class="block uppercase text-gray-500 text-xs font-semibold mb-2">
                  Enter Disease name
                </span>
                <input
                  type="text"
                  name="disease"
                  className="border-none px-3 py-2.5 placeholder-blueGray-300 text-gray-700 bg-white rounded text-md shadow appearance-none focus:outline-none focus:ring-0  focus:border-cyan-200   w-full ease-linear active:outline-none "
                />
              </label>
            </>
          )}

        </div>
        <hr className="my-6   "/>
          <div className=" ">
            <span class="block uppercase text-gray-700 text-sm font-semibold mb-2">
              Appointment type
            </span>
            {appointType.map((name, index) => (
              <>
                <div
                  onClick={() => {}}
                  class="flex items-center  pl-1  rounded dark:border-gray-700"
                >
                  <input
                    // onClick={(e) => {
                    //   setAppointTypeValue(e.target.value);
                    // }}
                    id="bordered-radio-1"
                    type="radio"
                    value={name}
                    name="bordered"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered"
                    class="w-full py-2 ml-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {name}
                  </label>
                </div>
              </>
            ))}
          </div>
      </ModelViewWrapper>
      
    </React.Fragment>
  );
};

export default AppointmentDiseases;
