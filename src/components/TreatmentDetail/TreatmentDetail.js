import React from 'react'
import TreatmentDetailModal from './TreatmentDetailModal'

const TreatmentDetail = ({selectedPatient,open,setOpen, setReReload,
  reReload,}) => {
  return (
    <div>

        <TreatmentDetailModal reReload={reReload}  setReReload={setReReload} open={open}  setOpen={setOpen} selectedPatient={selectedPatient}/>
    </div>
  )
}

export default TreatmentDetail