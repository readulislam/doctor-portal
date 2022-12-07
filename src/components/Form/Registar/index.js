import axios from "axios";
import { Button, TextInput } from "flowbite-react";
import { ErrorMessage, Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { BaseUrl, ListStates } from "../../../APi/api";
import useFirebaseAuth from "../../../hooks/useFirebaseAuth";
import { authActions } from "../../../Store/Auth-Slice";
import { genderValue, location, martial,  title } from "../../../Utils/mockData";
import OtpVerifyModal from "../../Modal/OtpVerifyModal";
import { PatientRegisterSchema } from "../Schema";
import { data } from "./const";
import "./style.css";
const Registar = () => {
  const dispatch = useDispatch();
  const naviagte=useNavigate()
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [cityName, setCityName] = useState("");
  const [stateId, setStateId] = useState(1);
  const [countryName, setCountryName] = useState("");
  const [martialStatus, setMartialStatus] = useState("");
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
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
  useEffect(() => {
    const fetching=async()=>{
      const {data} = await axios.get(`${BaseUrl}/get-states`)
      setState(data)
    }
    fetching();
    
  }, [])
  useEffect(() => {
    const cityfetching=async()=>{
      const {data} = await axios.get(`${BaseUrl}/get-citiesByStateId?stateId=${stateId}`)
      setCity(data)
    }
    cityfetching()
  }, [stateId])
  
  const handleDispatch=()=>{
    dispatch(authActions.registered())
    naviagte('/dashboard', { replace: true });
  }
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
                          setStateId(e.target.value);
                          
                        }}
                      >
                        <option selected> State</option>
                        {state.map (({id,name})=>(<option id={id} value={id} >{name}</option>))}
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
                        {city.map (({id,name})=>(<option id={id} value={id} >{name}</option>))}
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
      handleDispatch={handleDispatch}
        open={openOtp}
        number={number}
        setOpen={setOpenOtp}
        handleOtpSubmit={handleOtpSubmit}
      />
    </React.Fragment>
  );
};

export default Registar;
