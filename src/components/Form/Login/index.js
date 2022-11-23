import { Tabs } from 'flowbite-react';
import React from 'react'
import DoctorLogin from './DoctorLogin/DoctorLogin'
import PatientLogin from './PatientLogin/PatientLogin';


const Login = () => {
  return (
    <div className=" items-center mt-20 mx-80 p-12 bg-gray-50 dark:bg-gray-900">
    <Tabs.Group
          aria-label="Tabs with underline"
          style="underline"
        >
          <Tabs.Item 
          active={true}
          title="Doctor Login">
            <DoctorLogin/>
          </Tabs.Item>
          <Tabs.Item
           title="Patient Login"
          >
            <PatientLogin/>
          </Tabs.Item>
        </Tabs.Group>
    </div>

  )
}

export default Login