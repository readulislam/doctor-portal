import React from 'react'
import DiseaseDetailsView from './DiseaseDetailsView'

const DiseaseDetails = ({selectedDiseaseAppointment}) => {
  return (
    <>
    <DiseaseDetailsView selectedDiseaseAppointment={selectedDiseaseAppointment}/>
    </>
  )
}

export default DiseaseDetails