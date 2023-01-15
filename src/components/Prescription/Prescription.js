import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { PostPrescription } from '../../APi/api';
import PrescriptionView from './PrescriptionView'

const Prescription = ({selectedPatient}) => {
  const [date,setDate] = useState('');
  const [page,setPage] = useState(1);
  const [image,setImage] = useState('')
  const handleSubmit=()=>{
    console.log(image);
if(!image) return toast.error('Select a prescription',{id:1});
if(!date) return toast.error('Select follow up date',{id:1});
console.log('hoica')
    const key = "79c2ec0f6d6859d731f98a37a94e5c70";
    const formData = new FormData();
    formData.append("image", image);
 
    fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async(result) => {
        if (result) {
       console.log(result.data.url)
          const PrescriptionInfo = {
            patientId:selectedPatient.patientId,
            doctorId:selectedPatient.doctorId,
            appointmentId:selectedPatient.id,
            link: result.data.url,
            followUpDate:date
          };
          console.log(PrescriptionInfo);
          const data= await PostPrescription(PrescriptionInfo)
          console.log(data);
       
        }
      });
     
      setImage('');
      setDate('')

  }



  return (
    <>
    <PrescriptionView handleSubmit={handleSubmit} page={page} setPage={setPage} setDate={setDate} setImage={setImage}/>
    </>
  )
}

export default Prescription