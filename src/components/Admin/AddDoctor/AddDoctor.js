import { Button } from "flowbite-react";
import { ErrorMessage, Field, Formik } from "formik";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router";
import { RegistrationDoctor } from "../../../APi/api";
import { location } from "../../../Utils/mockData";
import { DoctorRegistarSchema } from "../../Form/Schema";
import { data } from "./const";
// 79c2ec0f6d6859d731f98a37a94e5c70
const AddDoctor = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [hospitalId, setHospitalId] = useState();
  const [departmentId, setDepartmentId] = useState();
  const [file, setFile] = useState();
  const [apiData, setApiData] = useState({});
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  // "https://api.imgbb.com/1/upload?expiration=600&key=YOUR_CLIENT_API_KEY" --form "image=R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  const handleSubmit = async (values) => {
    console.log(values, number, hospitalId, departmentId);
  

   
    // if(data){
    //   navigate('/login')
    // }
 
    const key = "79c2ec0f6d6859d731f98a37a94e5c70";
    const formData = new FormData();
    formData.append("image", file);
 
    fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async(result) => {
        if (result) {
       console.log()
          const doctorInfo = {
            name: values.name,
            education: values.education,
            departmentId: 2,
            hospitalId: 3,
            contactNo: number,
            designation: values.designation,
            img: result.data.url,
          };
       
        const data = await RegistrationDoctor(doctorInfo)
    console.log(data)
        }
      });
  };
  console.log(apiData);
  return (
    <React.Fragment>
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={DoctorRegistarSchema}
      >
        {({ handleSubmit, isSubmitting }) => (
          <div className="flex items-center  mt-20 mx-80 p-12  bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 h-full  mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <div className="flex flex-col overflow-y-auto md:flex-row">
                <main className="flex items-center justify-center sm:p-12 ">
                  <form
                    className="w-full"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                      Doctor Register
                    </h1>
                    <label>
                      <Field
                        type="text"
                        className="mt-4 w-full border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                        placeholder="ENTER_YOUR_NAME"
                        name="name"
                      />
                    </label>
                    <ErrorMessage name="name" />
                    <label>
                      <div className="mt-4">
                        <PhoneInput
                          className="border-none"
                          placeholder="Enter phone number"
                          value={number}
                          onChange={setNumber}
                        />
                      </div>
                    </label>

                    <label>
                      <Field
                        type="text"
                        className="mt-4 w-full border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                        placeholder="education"
                        name="education"
                      />
                    </label>
                    <ErrorMessage name="education" />
                    <label>
                      <Field
                        type="text"
                        className="mt-4 w-full border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                        placeholder="designation"
                        name="designation"
                      />
                    </label>
                    <ErrorMessage name="designation" />
                    <select
                      id="underline_select"
                      className=" py-2.5 mt-4 w-full  text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                      onChange={(e) => {
                        setHospitalId(e.target.value);
                      }}
                    >
                      <option selected>Location</option>
                      {location.map((values) => (
                        <option value={values}>{values}</option>
                      ))}
                    </select>
                    <select
                      id="underline_select"
                      className=" py-2.5  w-full  text-md  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                      onChange={(e) => {
                        setDepartmentId(e.target.value);
                      }}
                    >
                      <option selected>Department</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Oncology">Oncology</option>
                      <option value="Neurology">Neurology</option>
                      <option value="Nephrology">Nephrology</option>
                      <option value="Urology">Urology</option>
                      <option value="Gastroenterology">Gastroenterology</option>
                      <option value="Radiaton Oncology<">
                        Radiaton Oncology
                      </option>
                      <option value="CtYS">CTVS</option>
                      <option value="Neuro Surgery">Neuro Surgery</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Obstetrics  & Gynaecology">
                        Obstetrics & Gynaecology
                      </option>
                      <option value="Kidney Transplant">
                        Kidney Transplant
                      </option>
                      <option value="Plastic Surgery">Plastic Surgery</option>
                      <option value="Internal Medicine">
                        Internal Medicine
                      </option>
                      <option value="Critical Care">Critical Care</option>
                      <option value="Endocrinology">Endocrinology</option>
                      <option value="ENT">ENT</option>
                      <option value="Emergency Medicine">
                        Emergency Medicine
                      </option>
                      <option value="Dermatology">Dermatology</option>
                      <option value="Psychiatry">Psychiatry</option>
                      <option value="Rheumatology And Clinical Immunology">
                        Rheumatology And Clinical Immunology
                      </option>
                      <option value="Opthalmollogy">Opthalmollogy</option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Respiratory Medicine">
                        Respiratory Medicine
                      </option>
                    </select>
                    <div className="mt-5">
                      <input
                        type="file"
                        id="file"
                        name="file"
                        accept="image/*"
                        onChange={handleChange}
                      />
                    </div>

                    <Button className="mt-4" type="submit">
                      Register
                    </Button>
                  </form>
                </main>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default AddDoctor;
