import { Button } from "flowbite-react";
import { ErrorMessage, Field, Formik } from "formik";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useDispatch } from "react-redux";
import useFirebaseAuth from "../../../hooks/useFirebaseAuth";
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
                            <option value="B">Baby</option>
                            <option value="Bo">Baby Of</option>
                            <option value="Mr">Mr.</option>
                            <option value="Mrs">Mrs.</option>
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
                          data.gender = e.target.value;
                        }}
                      >
                        <option selected>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">other.</option>
                      </select>
                      <select
                        id="underline_select"
                        className=" py-2.5 mt-4 w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                        onChange={(e) => {
                          data.stateName = e.target.value;
                        }}
                      >
                        <option selected> State</option>
                        <option value="AN">Andaman and Nicobar Islands</option>
                        <option value="AP">Andhra Pradesh</option>
                        <option value="AR">Arunachal Pradesh</option>
                        <option value="AS">Assam</option>
                        <option value="BR">Bihar</option>
                        <option value="CH">Chandigarh</option>
                        <option value="CT">Chhattisgarh</option>
                        <option value="DN">Dadra and Nagar Haveli</option>
                        <option value="DD">Daman and Diu</option>
                        <option value="DL">Delhi</option>
                        <option value="GA">Goa</option>
                        <option value="GJ">Gujarat</option>
                        <option value="HR">Haryana</option>
                        <option value="HP">Himachal Pradesh</option>
                        <option value="JK">Jammu and Kashmir</option>
                        <option value="JH">Jharkhand</option>
                        <option value="KA">Karnataka</option>
                        <option value="KL">Kerala</option>
                        <option value="LA">Ladakh</option>
                        <option value="LD">Lakshadweep</option>
                        <option value="MP">Madhya Pradesh</option>
                        <option value="MH">Maharashtra</option>
                        <option value="MN">Manipur</option>
                        <option value="ML">Meghalaya</option>
                        <option value="MZ">Mizoram</option>
                        <option value="NL">Nagaland</option>
                        <option value="OR">Odisha</option>
                        <option value="PY">Puducherry</option>
                        <option value="PB">Punjab</option>
                        <option value="RJ">Rajasthan</option>
                        <option value="SK">Sikkim</option>
                        <option value="TN">Tamil Nadu</option>
                        <option value="TG">Telangana</option>
                        <option value="TR">Tripura</option>
                        <option value="UP">Uttar Pradesh</option>
                        <option value="UT">Uttarakhand</option>
                        <option value="WB">West Bengal</option>
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
                      <div className="flex gap-4">
                      <Button className="mt-4 ml-6 px-6" type="reset">
                          Reset
                        </Button>
                        <Button
                          className="mt-4 px-6"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Submit
                        </Button>
                       
                      </div>
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
                      <DatePicker
                        className="mt-4 w-full border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                        name="dob"
                        onChange={(e) => {
                          data.dob = e;
                        }}
                        placeholderText="Date of birth"
                      />
                      <select
                        id="underline_select"
                        className=" py-2.5 mt-4 w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                        onChange={(e) => {
                          data.hospitalName = e.target.value;
                        }}
                      >
                        <option selected>Location</option>
                        <option value="JA">mSmart Hospital,jaipur</option>
                        <option value="DE">mSmart Hospital,Delhi</option>
                        <option value="GR">mSmart Hospital,Gurugram</option>
                        <option value="Aj">mSmart Hospital,Ajmer</option>
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
                        <option value="widowed">Widowed</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="seperated">Seperated</option>
                      </select>
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
