import React, { useState } from 'react'
import DoctorLogin from './DoctorLogin/DoctorLogin'
import PatientLogin from './PatientLogin/PatientLogin';


const Login = () => {
    const [doctorLogin, setDoctorLogin] = useState(false);
    const [patientlogin, setPatientlogin] = useState(false);
  return (
    <div className=" items-center mt-20 mx-80 p-12 bg-gray-50 dark:bg-gray-900">
    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px">
            <li class="mr-2">
            <span onClick={()=>{setDoctorLogin(true);setPatientlogin(false)}} class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Doctor Login</span>
                
            </li>
            <li class="mr-2">
            <span onClick={()=>{setDoctorLogin(false);setPatientlogin(true)}} class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">PatientLogin</span>
                
            </li>
        </ul>
    </div>
    {doctorLogin &&<DoctorLogin/>}
    {patientlogin &&<PatientLogin/>}
    </div>

  )
}

export default Login