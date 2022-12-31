import axios from 'axios';
import { Table } from 'flowbite-react'
import { TableCell } from 'flowbite-react/lib/esm/components/Table/TableCell';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../APi/api';

const Viewpres = ({id,doctorId,patientId}) => {
    const [link, setlink] = useState();
    const [followUpDate, setfollowUpDate] = useState();
    useEffect(() => {
        const prescriptionfetch=async()=>{
              const {data}=await axios.get(`${BaseUrl}/get-prescriptionByPatientId?patientId=${patientId}&doctorId=${doctorId}&appointmentId=${id}`)
              setlink(data.link)
              setfollowUpDate(data.followUpDate)
              console.log(link);
              }
        prescriptionfetch()
    }, [])
    
  return (
    <>
    <Table.Cell>
                  {/* <Button  onClick={()=>setOpenTestReport(true)} >show</Button> */}
                  {/* <Button  onClick={()=>setOpen(true)} >Upload</Button> */}
                  <a href={link} target="_blank">
                  View
                  </a>
                  
                  
                </Table.Cell>
                <TableCell>
                    {followUpDate}
                </TableCell>
    </>
  )
}

export default Viewpres