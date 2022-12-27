import axios from 'axios'
import { Button, Table } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../APi/api'
import ShowPrexcription from '../components/Modal/ShowPrexcription'
import UploadPrescription from '../components/Modal/UploadPrescription'
import { getAllAppointment } from '../Store/Doctor-Slice'

const TableView = ({heading,data}) => {
    const [patientAppointment, setPatientAppointment] = useState([])
    const [open, setOpen] = useState(false);
    const {doctorId, doctorInfo,appointments }=useSelector(state=>state.Doctor)
    const {userId, userInfo }=useSelector(state=>state.Auth)
    const [openPatientPrescription, setOpenPatientPrescription] = useState(false);
    const dispatch = useDispatch()
    useEffect(()=>{
const fetching = async()=>{
     if(doctorId){
        await dispatch(getAllAppointment(parseInt(doctorId)))
     }
     if(userId){
        const {data} = await axios.get(`${BaseUrl}/patientAppointmentList`,{
            params:{patientId:userId}
        })
        console.log(data)
        setPatientAppointment(data)
     }
}
fetching()
    },[doctorId,userId])
  return (
    <>  <Table striped={true}>
    <Table.Head>
        {heading.map((head)=>(<Table.HeadCell>
            {head}
        </Table.HeadCell>))}
    </Table.Head>
    <Table.Body className="divide-y">
        {(appointments && doctorId) && appointments.map((d)=>(<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {d?.patient?.firstName}
            </Table.Cell>    
            <Table.Cell>
                {d?.date}
            </Table.Cell>
            <Table.Cell>
                {d?.time}
            </Table.Cell>
            <Table.Cell>
                {/* {d?.prescription} */}
                <Button  onClick={()=>setOpen(true)} >Upload</Button>
            </Table.Cell>
        </Table.Row>))}
        {(patientAppointment && userId) && patientAppointment.map((d)=>(<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {d?.doctor?.name}
            </Table.Cell>    
            <Table.Cell>
                {d?.date}
            </Table.Cell>
            <Table.Cell>
                {d?.time}
            </Table.Cell>
            <Table.Cell>
                {/* <Button  onClick={()=>setOpenPatientPrescription(true)} >show</Button> */}
                {/* <Button  onClick={()=>setOpen(true)} >Upload</Button> */}
             <Link to="#" className=' text-cyan-800 border-b-2 border-b-cyan-800 ' >View</Link>
            </Table.Cell>
        </Table.Row>))}
    </Table.Body>
   
       
  </Table>
      {!appointments.length && <h2 className='text-3xl text-black py-10 font-semibold w-full text-center'>You haven't Appointments</h2>}  
      <UploadPrescription open={open} setOpen={setOpen} />
      <ShowPrexcription setOpen={setOpenPatientPrescription} open={openPatientPrescription} />
    </>

  

  )
}

export default TableView

/* 
{!appointments.length | patientAppointment.length  && <h2 className='text-3xl text-black py-10 font-semibold w-full text-center'>You haven't Appointments</h2>}
*/