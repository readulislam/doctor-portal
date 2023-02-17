import React, { useState } from 'react'
import PrimaryButton from '../../Common/PrimaryButton'

const DoctorDashBoard = () => {
    const [charges, setcharges] = useState();
    const [basicCharges, setBasicCharges] = useState();
    const [range, setrange] = useState();
  return (
    <div>
         {/* for FollowUp */}
        <div>
        <input 
         required={true} 
         onChange={(e)=>{setcharges(e.target.value)}}
          type='text' placeholder="Foloow Up Charges" 
          className="w-[190px] border-1 focus:border-gray-300 outline-none  focus:ring-0 rounded-md mr-2"
         
          />
          <input 
         required={true} 
         onChange={(e)=>{setBasicCharges(e.target.value)}}
          type='text' placeholder="basic  Charges" 
          className="w-[190px] border-1 focus:border-gray-300 outline-none  focus:ring-0 rounded-md mr-2"
         
          />
           <input 
         required={true} 
         onChange={(e)=>{setrange(e.target.value)}}
          type='text' placeholder="Enter Range" 
          className="w-[190px] border-1 focus:border-gray-300 outline-none  focus:ring-0 rounded-md mr-2"
          />
          <PrimaryButton 
          
          type={'button'} isBg={'!bg-gray-700 '}>Add</PrimaryButton>
        </div>
        {/* For Doctor DashBoard */}
        <div>
            
        </div>
    </div>
  )
}

export default DoctorDashBoard