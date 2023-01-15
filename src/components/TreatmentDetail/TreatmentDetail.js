import React from 'react'
import TreatmentDetailModal from './TreatmentDetailModal'

const TreatmentDetail = ({selectedPatient,open,setOpen}) => {
  return (
    <div>

        <TreatmentDetailModal open={open}  setOpen={setOpen} selectedPatient={selectedPatient}/>
    </div>
  )
}

export default TreatmentDetail