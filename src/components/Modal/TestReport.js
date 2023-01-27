import axios from 'axios';
import { Button, Label, Modal, Radio, Textarea } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { BaseUrl, ListDiseases, PostReport } from '../../APi/api';

const TestReport = ({open,setOpen,doctorData,doctorId}) => {
  const [disease, setDisease] = useState([]);
  const [others, setOthers] = useState(false);
  
  
  useEffect(() => {
    const fetch=async()=>{
      // const {data}=await ListDiseases(doctorData.departmentId)
      const {data}=await ListDiseases(2)
      setDisease(data)
        
    }
   fetch()
  }, [])

console.log(disease);

  const handleSubmit=async(e)=>{
    e.preventDefault()

    
  }
  return (
    <React.Fragment>
    <Modal
      show={true}
      size='4xl'
      position="center"
      onClose={() => {
        setOpen(false);
      }}
    >
      <div className="bg-green-200 rounded-md">
      
     <Modal.Header className=""> Test Report </Modal.Header>
        
        <Modal.Body>
            <div className='grid container mx-auto md:grid-cols-2   xl:grid-cols-3 xl:gap-x-5   gap-y-5   mt-16 place-items-center' >
              {disease.map((values)=>(
              <div className='text-base shadow-md  hover:bg-sky-500 hover:text-white cursor-pointer  py-1 px-3 bg-white border  rounded-md '>{values.name}</div>
              ))}
            </div>
            <div className='grid container mx-auto md:grid-cols-2   xl:grid-cols-2 xl:gap-x-5   gap-y-10   mt-16 place-items-center'>
              <div onClick={()=>setOthers(!others)}>
                others
              </div>
              {others &&<div>
                 <input className='' type="text" /> 
              </div>}
              <div >
                type of appointment
                <div className='mt-3'>
                  <input type="radio" id="normal" name="drone" value="normal" checked/>
                  <label className='ml-5' for="normal">normal Appointment</label>
                </div>
                <div className='mt-3'>
                  <input type="radio" id="follow" name="drone" value="follow"/>
                  <label className='ml-5'  for="follow">follow up Appointment</label>
                </div>
                
              </div>
            </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-between">
          <Button
            className="px-2 "
            color="gray"
            onClick={() => {
              setOpen(false);
            }}
          >
            prev
          </Button>
          <Button
            
            className="px-2 "
            gradientDuoTone="cyanToBlue"
            onClick={()=>{setOpen(false)}}
          >
            next
          </Button>
        </Modal.Footer>
        </div>
    </Modal>
  </React.Fragment>
  )
}

export default TestReport