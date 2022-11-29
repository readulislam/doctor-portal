import { Button, TextInput } from "flowbite-react";
import { ErrorMessage, Field, Formik } from "formik";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useDispatch } from "react-redux";
import useFirebaseAuth from "../../../hooks/useFirebaseAuth";
import { genderValue, location, martial, state, title } from "../../../Utils/mockData";
import OtpVerifyModal from "../../Modal/OtpVerifyModal";
import { PatientRegisterSchema } from "../Schema";
import { data } from "./const";
import "./style.css";
const Registar = () => {
  const dispatch = useDispatch();
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [martialStatus, setMartialStatus] = useState("");
  const [number, setNumber] = useState("");
  const [openOtp, setOpenOtp] = useState(false);
  const [OTPresult, setOTPResult] = useState('')
  const { setupRecaptcha } = useFirebaseAuth();
  const handleSubmit = async (values) => {
    console.log(values);
    
    if (values && number) {
      const response = await setupRecaptcha(number);
      setOTPResult(response);
      if(response){
        setOpenOtp(true)
      }
    }
  };
  const handleOtpSubmit = () => {};

  return (
    <React.Fragment>
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={PatientRegisterSchema}
      >
        {({ handleSubmit, isSubmitting }) => (
          <div className="flex items-center mt-10 p-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 h-full max-w-7xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <div className=" overflow-y-auto">
                <h1 className=" flex mb-4 text-4xl bg-cyan-100/50  justify-center font-semibold text-gray-700 dark:text-gray-200">
                  Patient Registration
                </h1>
                <main className="flex items-center grid-cols-4 justify-center p-6 sm:p-12">
                  <form
                    className="w-full flex "
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    <div className="w-1/2 pr-5">
                      <div className="flex">
                        <div className="mr-3 w-1/2">
                          <select
                            id="underline_select"
                            className=" mt-5 w-full text-gray-500 grid-cols-1 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                            onChange={(e) => {
                              data.title = e.target.value;
                            }}
                          >
                            <option selected>Title</option>
                            {title.map((values)=>(<option value={values} >{values}</option>))}
                          </select>
                        </div>
                        <div className="w-1/2">
                          <label>
                            <Field
                              type="text"
                              className="mt-4  border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                              placeholder="ENTER_YOUR_NAME"
                              name="firstName"
                            />
                          </label>
                          <ErrorMessage name="firstName" />
                        </div>
                      </div>
                      <label>
                        {/* <Field
                        type="number"
                        className="mt-4 w-full border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                        placeholder="*contactNo"
                        name="contactNo"
                      /> */}

                        <div className="mt-4">
                          <PhoneInput
                            className="border-none"
                            placeholder="Enter phone number"
                            value={number}
                            onChange={setNumber}
                          />
                        </div>
                      </label>
                      <ErrorMessage name="contactNo" />
                      <label>
                        <Field
                          type="text"
                          className="mt-4 w-full border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                          placeholder="*address"
                          name="address"
                        />
                      </label>
                      <ErrorMessage name="address" />
                      <select
                        id="underline_select"
                        className=" py-2.5 mt-4 w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      >
                        <option selected>Gender</option>
                        {genderValue.map((values)=>(<option value={values} >{values}</option>))}
                      </select>
                      <select
                        id="underline_select"
                        className=" py-2.5 mt-4 w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                        onChange={(e) => {
                          data.stateName = e.target.value;
                        }}
                      >
                        <option selected> State</option>
                        {state.map ((i,values)=>(<option id={i} value={values} >{values}</option>))}
                      </select>
                      <label>
                        <Field
                          type="number"
                          className="mt-4 w-full border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                          placeholder="*pincode"
                          name="pincode"
                        />
                      </label>
                      <ErrorMessage name="pincode" />
                      <div className="my-4" id="recaptcha-container" />
                      
                      <Button className="mt-4 ml-6 px-6" type="reset">
                          Reset
                        </Button>
                        
                      
                    </div>
                    <div className="w-1/2">
                      <div className="flex">
                        <div className="w-2/5 ">
                          <label>
                            <Field
                              type="text"
                              className="mt-4  border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                              placeholder="middleName"
                              name="middleName"
                            />
                          </label>
                        </div>
                        <div className="w-2/5 ml-12">
                          <label>
                            <Field
                              type="text"
                              className="mt-4  border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                              placeholder="lastName"
                              name="lastName"
                            />
                          </label>
                          <ErrorMessage name="lastName" />
                        </div>
                      </div>
                      {/* <DatePicker
                        className="mt-4 w-full border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                        name="dob"
                        onChange={(e) => {
                          data.dob = e;
                        }}
                        placeholderText="Date of birth"
                      /> */}
                      <TextInput id="email1" className="mt-4 w-full border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer" 
                      type="date" required={true} onChange={(e)=>{setDate(e.target.value);}} />
                      <select
                        id="underline_select"
                        className=" py-2.5 mt-4 w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                        onChange={(e) => {
                          data.hospitalName = e.target.value;
                        }}
                      >
                        <option selected>Location</option>
                       {location.map((values)=>(<option value={values} >{values}</option>))}
                      </select>
                      <select
                        id="underline_select"
                        className=" py-2.5 mt-4 w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                        onChange={(e) => {
                          data.countryName = e.target.value;
                        }}
                      >
                        <option selected>India</option>
                      </select>
                      <select
                        id="underline_select"
                        className=" py-2.5  mt-4 w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                        onChange={(e) => {
                          data.cityName = e.target.value;
                        }}
                      >
                        <option selected>City</option>
                        <option value="Jai">jaipur</option>
                        <option value="Del">Delhi</option>
                        <option value="Guur">Gurugram</option>
                        <option value="Ajm">Ajmer</option>
                        <option value="Agr">Agra</option>
                        <option value="Bho">Bhopal</option>
                        <option value="Cha">Chandigarh</option>
                        <option value="Rai">Raipur</option>
                        <option value="Kol">Kolkata</option>
                        <option value="Mum">Mumbai</option>
                        <option value="Che">Chennai</option>
                        <option value="Luc">Lucknow</option>
                        <option value="Ahm">Ahmedabad</option>
                        <option value="Ali">Aligarh</option>
                      </select>
                      <select
                        id="underline_select"
                        className=" py-2.5 mt-4 w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                        onChange={(e) => {
                          data.martialStatus = e.target.value;
                        }}
                      >
                        <option selected>Select Martial Status</option>
                        {martial.map((values)=>(<option value={values} >{values}</option>
                        ))}
                      </select>
                      <Button
                          className="mt-4 px-6 flex justify-end"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Submit
                        </Button>
                    </div>
                  </form>
                </main>
              </div>
            </div>
          </div>
        )}
      </Formik>
      <OtpVerifyModal
      OTPresult={OTPresult}
        open={openOtp}
        number={number}
        setOpen={setOpenOtp}
        handleOtpSubmit={handleOtpSubmit}
      />
    </React.Fragment>
  );
};

export default Registar;
