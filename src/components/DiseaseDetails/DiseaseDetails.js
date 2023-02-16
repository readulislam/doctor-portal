import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BaseUrl } from '../../APi/api';
import DiseaseDetailsView from './DiseaseDetailsView'

const DiseaseDetails = ({selectedDiseaseAppointment}) => {
  const [data,setData] = useState([])
  const {patientId,doctorId,id}=selectedDiseaseAppointment;
  useEffect(() => {
    const reportFetch=async()=>{
        if(patientId&&doctorId&&id){
          const {data}=await axios.get(`${BaseUrl}/get-testReports?patientId=${patientId}&doctorId=${doctorId}&appointmentId=${id}`)
         
          setData(data)
        }
          }
    reportFetch()
}, [doctorId,patientId,id])


  return (
    <>
    <DiseaseDetailsView data={data} selectedDiseaseAppointment={selectedDiseaseAppointment}/>
    </>
  )
}

export default DiseaseDetails