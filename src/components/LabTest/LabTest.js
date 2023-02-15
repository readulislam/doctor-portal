import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BaseUrl, PostReport } from '../../APi/api'
import LabTestView from './LabTestView'

const LabTest = ({selectedPatient}) => {
  const {patientId,doctorId,id} = selectedPatient|| {}
  const [reportFile ,setReportFile] = useState('');
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const[refetch, setRefetch] = useState(false);
   useEffect(() => {
    const reportFetch=async()=>{
          const {data}=await axios.get(`${BaseUrl}/get-testReports?patientId=${patientId}&doctorId=${doctorId}&appointmentId=${id}`)
         
          setData(data)
          }
    reportFetch()
}, [doctorId,id,patientId, refetch])


  const handleSubmit=async()=>{
   
    const formData = new FormData();
    formData.append("file", reportFile);
    formData.append("name", name);
    formData.append("patientId", selectedPatient.patientId);
    formData.append("doctorId", selectedPatient.doctorId);
    formData.append("appointmentId", selectedPatient.id);
    
    const data= await PostReport(formData)
    setRefetch(!refetch)
    setReportFile('');
    
  }
  return (
    <><LabTestView handleSubmit={handleSubmit} data={data} setName={setName} setReportFile={setReportFile}/></>
  )
}

export default LabTest