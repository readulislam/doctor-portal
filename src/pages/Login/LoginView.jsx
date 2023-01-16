import { Tabs } from "flowbite-react";
import React, { useState } from "react";
import { GiMedicines } from "react-icons/gi";
import LoginForm from "../../Common/LoginForm";

const LoginView = ({props}) => {
  const{
    setDoctorNumber,
    setPatientNumber,
    isPatient,
    setIsPatient,
    isDoctor,
    setIsDoctor,
    patientNumber,
    doctorNumber,
    patientFormSubmitHandler,
    doctorFormSubmitHandler
  } = props;
 
 


  return (
    <>
      <div class="items-center md:flex bg-green-100/50 md:justify-between w-full ">
        <div className="md:flex-1 hidden lg:flex  items-center flex-col ">
          <GiMedicines className="text-gray-300 " size={150} />
          <h1 className="xl:text-4xl md:text-3xl font-bold uppercase pt-14  text-[#499AFA]">
            The Indian College of
          </h1>
          <h2 className="xl:text-6xl md:text-5xl font-semibold uppercase pt-3 pb-4 text-[#499AFA]">
            Lifestyle Medicine
          </h2>
          <p className="md:text-sm xl:text-lg text-gray-700 pb-4  ">
            Reinvigorates the passion for why clinicians choose <br /> medicine
            as their profession – to become true healers
          </p>
          <GiMedicines className="text-gray-300 rotate-180 " size={35} />
          <p></p>
        </div>
        {/* <LoginForm/> */}

        <div class=" flex-1 relative  flex-col h-screen  justify-center content-center items-center  w-full  bg-green-200 rounded-lg bg-blueGray-100 border-0">
          <ul className="absolute uppercase cursor-pointer flex top-20 right-20 py-2 px-2  ">
            <li
              onClick={() => {
                setIsDoctor(false);
                setIsPatient(true);
              }}
              className={` ${
                isPatient && "!bg-gray-100/50 shadow-md "
              } font-[500] cursor-pointer pr-2 border-r-2 border-gray-400 rounded-tl-md hover:bg-gray-100/50 py-1   pl-2`}
            >
              Patient
            </li>
            <li
              onClick={() => {
                setIsDoctor(true);
                setIsPatient(false);
              }}
              className={`${
                isDoctor && "!bg-gray-100/50 shadow-md"
              }  cursor-pointer  rounded-tr-md font-[500] pl-2 py-1 hover:bg-gray-100/50  pr-2 `}
            >
              Doctor
            </li>
          </ul>
          {isPatient && !isDoctor ? (
            <LoginForm
            uniqueKey='patientLogin'
              heading={"Login AS Patient"}
              initialValues={{ name: "" }}
              handleFormSubmit={patientFormSubmitHandler}
              number={patientNumber}
              setNumber={setPatientNumber}
            />
          ) : (
            <LoginForm
            uniqueKey='doctorLogin'
              heading={"Login AS Doctor"}
              initialValues={{ name: "" }}
              handleFormSubmit={doctorFormSubmitHandler}
              number={doctorNumber}
              setNumber={setDoctorNumber}
            />
          )}

          {/* <LoginForm heading={'Login AS Patient'}/> */}
        </div>

        <div />
      </div>
    </>
  );
};

export default LoginView;
