import { Card, Sidebar, Tabs } from 'flowbite-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { patientHeading, patientPastData, patientUpComingData, patientUpComingHeading } from '../../Utils/mockData'
import PastTableView from '../../Utils/pastTable'
import TableView from '../../Utils/TableView'
import Menu from '../Navbar/Menu'

const PatientView = () => {
  const {isLoggedIn ,isRegister,userInfo} =useSelector(state=>state.Auth)
  // const data=[patientUpComingData.map(()=>{
  //   return()
  // })]
  return (
    <div>
      <Menu/>
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
                Disease History
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
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgD-7kP3hbPiQYBy6N3-pWaFqUNgsUwKE9XVydJQ&s"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {userInfo.firstName+' '+userInfo.lastName}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              {userInfo.contact}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              {userInfo.gender}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {userInfo.address}
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
              <TableView heading={patientUpComingHeading} data={patientUpComingData} />
            </Tabs.Item>
            <Tabs.Item 
            title
            >

            </Tabs.Item>
            <Tabs.Item 
            title="Past Appointment">
            <PastTableView heading={patientHeading} data={patientPastData} />
            </Tabs.Item>
          
          </Tabs.Group>
          
        </div>
      </div>
    </div>
    
  )
}

export default PatientView