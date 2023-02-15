import { computeHeadingLevel } from "@testing-library/react";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { BaseUrl, ListPrescription } from "../../APi/api";

const DiseaseDetailsView = ({ selectedDiseaseAppointment,data }) => {
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
      <img src={`${BaseUrl}/${PrescriptionData?.link}`}  alt=""/> 


      { !isEmpty(data) && data.map(report=><>
      
        <img src={`${BaseUrl}/${report?.link}`}  alt=""/> 
      </>)}
    </div>
  );
};

export default DiseaseDetailsView;
