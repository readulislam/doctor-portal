import React, { useState } from "react";
import DiseaseDetails from "../DiseaseDetails";
import TreatmentDetailModal from "./TreatmentDetailModal";

const TreatmentDetail = ({
  selectedPatient,
  open,
  setOpen,
  setReReload,
  reReload,
}) => {
  

  return (
    
    
        <>
          <TreatmentDetailModal
            reReload={reReload}
            setReReload={setReReload}
            open={open}
            setOpen={setOpen}
            selectedPatient={selectedPatient}
           
          />
        </>
       
  );
};

export default TreatmentDetail;
