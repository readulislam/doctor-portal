import { Button } from 'flowbite-react'
import { Field, Formik,ErrorMessage } from 'formik';
import React from 'react'
import { PatientLogInSchema } from '../../Schema'
import { data } from './const'

const PatientLogin = () => {
    const handleSubmit=(e)=>{
      console.log(e);
    }
    
  return (    
    <Formik
    initialValues={data}
    onSubmit={handleSubmit}
    validationSchema={PatientLogInSchema}
  >
    {({ handleSubmit, isSubmitting }) => (
      <div className="flex items-center  bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full  mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <main className="flex items-center justify-center sm:p-12 ">
              <form
                className="w-full"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  PATIENT LOGIN
                </h1>
                <label>
                  <Field
                    type="number"
                    className="mt-4 w-full border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                    placeholder='*contactNo'
                    name="contactNo"
                  />
                </label>
                <ErrorMessage name="contactNo" />
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

export default PatientLogin