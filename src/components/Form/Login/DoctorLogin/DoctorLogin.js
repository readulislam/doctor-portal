import { Button } from 'flowbite-react';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import useFirebaseAuth from '../../../../hooks/useFirebaseAuth';
import { getDoctor } from '../../../../Store/Doctor-Slice';
import DoctorOtpVerifyModel from '../../../Modal/DoctorOtpVerifyModel';
import { data } from './const';

const DoctorLogin = () => {
  const {doctorId, doctorInfo}=useSelector(state=>state.Doctor)
  const [hospitalLocation, setHospitalLocation] = useState("");
  const dispatch=useDispatch()
  const naviagte=useNavigate()
  const [number, setNumber] = useState("");
  const [openOtp, setOpenOtp] = useState(false);
  const [OTPresult, setOTPResult] = useState('')
  const { setupRecaptcha } = useFirebaseAuth();
  const handleDispatch=()=>{
   naviagte('/doctorView')
  }
    const handleSubmit=async(values)=>{
   console.log(values);
   console.log(number)
    const data = await dispatch(getDoctor(number));
    
    
    
    }
    
    useEffect(()=>{
      const verify = async()=>{
        if ( doctorId && number) {
          

          const response = await setupRecaptcha(number,'doctorLogin');
          setOTPResult(response);
          console.log(response);
          if(response){
            setOpenOtp(true)
          }else{
            alert('you are not authorized doctor')
          }
        }
      }
      verify()
    },[doctorId])
    const handleOtpSubmit = () => {};
  return (    
    <React.Fragment>
      <Formik
      initialValues={data}
      onSubmit={handleSubmit}
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
                  <PhoneInput
                  defaultCountry="IN"
                    className="border-none"
                    placeholder="Enter phone number"
                    value={number}
                    onChange={setNumber}
                  />
                     <div className="my-4" id="doctorLogin" />
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
    <DoctorOtpVerifyModel
      OTPresult={OTPresult}
      handleDispatch={handleDispatch}
        open={openOtp}
        number={number}
        setOpen={setOpenOtp}
        handleOtpSubmit={handleOtpSubmit}
      />
    </React.Fragment>
   
  )
}

export default DoctorLogin