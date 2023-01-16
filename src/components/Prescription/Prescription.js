import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { ListPrescription, PostPrescription, updateAppointment } from '../../APi/api';
import PrescriptionView from './PrescriptionView'

const Prescription = ({selectedPatient, setReReload,
    reReload,}) => {
  const {id, patientId, doctorId} = selectedPatient;
  const [date,setDate] = useState('');
  const [page,setPage] = useState(1);
  const [image,setImage] = useState('');
  const [prescriptionData, setPrescriptionData] = useState();
  const [reload ,setReload] = useState(false)
  const handleSubmit=async()=>{
    console.log(image);
if(!image) return toast.error('Select a prescription',{id:1});
if(!date) return toast.error('Select follow up date',{id:1});
console.log('hoica')
    const key = "79c2ec0f6d6859d731f98a37a94e5c70";
    const formData = new FormData();
    formData.append("file", image);
   
 
    formData.append("followUpDate", date);
    formData.append("patientId", selectedPatient.patientId);
    formData.append("doctorId", selectedPatient.doctorId);
    formData.append("appointmentId", selectedPatient.id);
    const data= await PostPrescription(formData)
    console.log(data);

if(!selectedPatient.status){
  const update =await updateAppointment(selectedPatient.id);
  console.log(update);
  setReReload(!reReload)
}
setReload(!reload)



    // fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then(async(result) => {
    //     if (result) {
    //    console.log(result.data.url)
    //       const PrescriptionInfo = {
    //         patientId:selectedPatient.patientId,
    //         doctorId:selectedPatient.doctorId,
    //         appointmentId:selectedPatient.id,
    //         link: result.data.url,
    //         followUpDate:date
    //       };
    //       console.log(PrescriptionInfo);
          
       
    //     }
    //   });
     
      setImage('');
      setDate('')

  }


useEffect(()=>{
  const fetching = async()=>{
 const data = await ListPrescription({appointmentId:id, patientId, doctorId});
 setPrescriptionData(data)
  }
  fetching()
},[doctorId, id, patientId,reload])
  return (
    <>
    <PrescriptionView prescriptionData={prescriptionData} handleSubmit={handleSubmit} page={page} setPage={setPage} setDate={setDate} setImage={setImage}/>
    </>
  )
}

export default Prescription