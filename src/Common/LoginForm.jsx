import { Formik } from "formik";
import React from "react";
import PhoneInput from "react-phone-number-input";
import InputField from "./InputField";
import PrimaryButton from "./PrimaryButton";


const LoginForm = ({initialValues,heading, handleFormSubmit,number,setNumber}) => {
  return (
    <>
      <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      // enableReinitialize={isDataEmpty}
      // validationSchema={EditLocationError}
      >
        {({ handleSubmit, isSubmitting, setFieldValue }) => (
        <>
          <form autoComplete="off" onSubmit={handleSubmit}    >

          <div class=" flex flex-col h-screen  justify-center items-center  w-full  ">
          <div class="rounded-t  mb-0   ">
                <p className="text-[#499AFA] mb-8 md:font-semibold uppercase text-lg md:text-2xl">
               {heading}
                </p>
              </div>
             <div className="px-2 md:px-0">
             <div class="relative max-w-[300px] md:max-w-full mx-auto w-full mb-2">
                    <InputField type={"text"} labelName={"Name"} name="name" />
                  </div>
                  <div class="relative  w-full mb-5">
                    <label className="mb-5">
                      <span class="block mt-2  uppercase text-gray-500 text-xs font-semibold mb-2">
                        Mobile
                      </span>
                      <PhoneInput
                        defaultCountry="IN"
                        className="border-none max-w-[300px] mx-auto md:max-w-full px-3 py- placeholder-blueGray-300 text-gray-700 bg-white rounded text-md shadow appearance-none focus:outline-none focus:ring-0 w w-full ease-linear active:outline-none "
                        placeholder="Enter phone number"
                        value={number}
                        onChange={setNumber}
                      />
                    </label>
                  </div>
                  <div class="relative max-w-[300px] md:max-w-full mx-auto w-full ">
                  <PrimaryButton isWidthFull={true} type="submit">Submit</PrimaryButton>
                  </div>

             </div>
             

          </div>


      
          </form>
        
        </>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
