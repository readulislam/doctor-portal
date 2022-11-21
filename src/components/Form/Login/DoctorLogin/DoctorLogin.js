import { Button } from 'flowbite-react'
import { Field, Formik,ErrorMessage } from 'formik';
import React, { useState } from 'react'
import { DoctorLogInSchema } from '../../Schema'
import { data } from './const'

const DoctorLogin = () => {
  const [hospitalLocation, setHospitalLocation] = useState("");
    const handleSubmit=(e)=>{
        console.log("hi");
    }
  return (    
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={DoctorLogInSchema}
    >
      {({ handleSubmit, isSubmitting }) => (
        <div className="flex items-center  bg-gray-50 dark:bg-gray-900">
          <div className="flex-1 h-full  mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div className="flex flex-col overflow-y-auto md:flex-row">
              <main className="flex items-center justify-center  sm:p-12">
                <form
                  className="w-full"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                    DOCTOR LOGIN
                  </h1>
                  <label>
                  <Field
                    type="text"
                    className="mt-4 w-full  border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                    placeholder='ENTER_YOUR_NAME'
                    name="doctorName"
                  />
                </label>
                <ErrorMessage name="doctorName" />
                <label>
                  <Field
                    type="number"
                    className="mt-4 w-full border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                    placeholder='*contactNo'
                    name="contactNo"
                  />
                </label>
                <ErrorMessage name="contactNo" />
                <label>
                  <Field
                    type="text"
                    className="mt-4 w-full  border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                    placeholder='ENTER_YOUR_SPECIALITY'
                    name="speciality"
                  />
                </label>
                <ErrorMessage name="speciality" />
                <select
                  id="underline_select"
                  className=" py-2.5 mt-4 w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                  onChange={(e)=>{setHospitalLocation(e.target.value)}}
                >
                  <option selected>Location</option>
                  <option value="JA">mSmart Hospital,jaipur</option>
                  <option value="DE">mSmart Hospital,Delhi</option>
                  <option value="GR">mSmart Hospital,Gurugram</option>
                  <option value="Aj">mSmart Hospital,Ajmer</option>
                </select>
                  <Button
                    className="mt-4"
                    type="submit"
                    disabled={isSubmitting}
                  >
                   LOGIN
                  </Button>

                </form>
              </main>
            </div>
          </div>
        </div>
      )}
    </Formik>
   
  )
}

export default DoctorLogin