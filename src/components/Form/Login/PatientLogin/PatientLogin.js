import { Button } from 'flowbite-react'
import { Field, Formik,ErrorMessage } from 'formik';
import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input';
import useFirebaseAuth from '../../../../hooks/useFirebaseAuth';
import OtpVerifyModal from '../../../Modal/OtpVerifyModal';
import { PatientLogInSchema } from '../../Schema'
import { data } from './const'

const PatientLogin = () => {
  const [number, setNumber] = useState("");
  const [openOtp, setOpenOtp] = useState(false);
  const [OTPresult, setOTPResult] = useState('')
  const { setupRecaptcha } = useFirebaseAuth();
    const handleSubmit=async(values)=>{
      console.log(values);
      if (values && number) {
        const response = await setupRecaptcha(number);
        setOTPResult(response);
        if(response){
          setOpenOtp(true)
        }
      }
    }
    const handleOtpSubmit = () => {};
  return (    
   <React.Fragment>
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
                <PhoneInput
                    className="border-none"
                    placeholder="Enter phone number"
                    value={number}
                    onChange={setNumber}
                  />
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
  <OtpVerifyModal
      OTPresult={OTPresult}
        open={openOtp}
        number={number}
        setOpen={setOpenOtp}
        handleOtpSubmit={handleOtpSubmit}
      />
   </React.Fragment>
  )
}

export default PatientLogin