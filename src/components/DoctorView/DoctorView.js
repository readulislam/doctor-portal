
import { Card, Sidebar, Tabs } from 'flowbite-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { doctorHeading, doctorPastData, doctorUpComingData } from '../../Utils/mockData';
import TableView from '../../Utils/TableView';
import AvailabilitySelect from './Availability/AvailabilitySelect';

const DoctorView = () => {
  const {doctorId, doctorInfo}=useSelector(state=>state.Doctor)
  const data =[]
  
  return (
    <div className='flex '>
      <div className="w-fit ">
        <Sidebar aria-label="Default sidebar example" className=' mt-20'>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
              active={true}
              >
                Appointment
              </Sidebar.Item>
              <Sidebar.Item
              >
                Patient
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className='w-full ml-7 mt-20'>
        <div className="max-w-xl">
          <Card
            horizontal={true}
            className="h-80"
            imgSrc={doctorInfo.img}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {doctorInfo?.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {doctorInfo?.designation}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {doctorInfo?.hospital.name+ ', '+doctorInfo?.hospital.address}
            </p>
          </Card>
        </div>
        <Tabs.Group
          aria-label="Tabs with underline"
          className='mt-5'
          style="underline"
        >
         
          <Tabs.Item
            active={true}
            title="Upcoming Appointment"
          >
            <TableView heading={doctorHeading} data={doctorUpComingData} />
          </Tabs.Item>
          <Tabs.Item 
          
          title="Past Appointment">
           <TableView heading={doctorHeading} data={doctorPastData} />
          </Tabs.Item>
          <Tabs.Item title="Availabilty">
            <AvailabilitySelect/>
          </Tabs.Item>
        </Tabs.Group>
        
      </div>
    </div>
  )
}

export default DoctorView