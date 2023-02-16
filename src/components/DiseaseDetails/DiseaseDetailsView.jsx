import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { BaseUrl, ListPrescription } from "../../APi/api";

const DiseaseDetailsView = ({ selectedDiseaseAppointment,data }) => {
  console.log(data);
    const [PrescriptionData,setPrescriptionData] = useState([])
    useEffect(()=>{
        const fetching = async()=>{
       const data = await ListPrescription({appointmentId:selectedDiseaseAppointment.id, patientId:selectedDiseaseAppointment.patient.id, doctorId:selectedDiseaseAppointment.doctor.id});
       setPrescriptionData(data)
        }
        fetching()
      },[])
  return (
    <div className="pt-2">
      <p>Date: {selectedDiseaseAppointment.date}</p>
      <p>Disease Name: {selectedDiseaseAppointment.diseaseName}</p>
      <p>Doctor Name: {selectedDiseaseAppointment.doctor.name}</p>

      <p>
        Patient Name:
        {selectedDiseaseAppointment.patient.firstName +
          " " +
          selectedDiseaseAppointment.patient.lastName}
      </p>
      <p>Gender: {selectedDiseaseAppointment.patient.gender}</p>
      

<p className="font-semibold text-gray-700 uppercase pt-4 pb-1 text-xl">Lap Report</p>

      { !isEmpty(data) && data.map(report=>
       

<div key={report.id} className="h-[1120px]">

<iframe title={`${report.name}`}   width='100%' height='100%'  src={`${BaseUrl}/${report?.link}`} type="application/pdf"/>
        
</div>  
      )}

<p className="font-semibold text-gray-700 uppercase pt-4 pb-1 text-xl">Prescription Report</p>
<img  width='100%' height='100%' src={`${BaseUrl}/${PrescriptionData?.link}`}  alt=""/> 
    </div>




  );
};

export default DiseaseDetailsView;
