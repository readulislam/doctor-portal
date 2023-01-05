import axios from 'axios';
import { Button, Label, Modal, Textarea } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { BaseUrl, PostReport } from '../../APi/api';

const TestReport = ({open,setOpen,reportData,reload,setReload,setReportData}) => {
  const [data, setData] = useState([]);
  const [file, setFile] = useState();
  
  
  useEffect(() => {
    const reportfetch=async()=>{
          const {data}=await axios.get(`${BaseUrl}/get-testReports?patientId=${reportData.patientId}&doctorId=${reportData.doctorId}&appointmentId=${reportData.id}`)
          setData(data)
          }
    reportfetch()
}, [reload,reportData.id])



  const handleSubmit=async(e)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", e.target.name.value);
    formData.append("patientId", reportData.patientId);
    formData.append("doctorId", reportData.doctorId);
    formData.append("appointmentId", reportData.id);
    
    console.log(formData,reportData);
    const data= await PostReport(formData)
    setReload(!reload)
    setFile('');

  }
  return (
    <React.Fragment>
    <Modal
      show={open}
      position="center"
      onClose={() => {
        setOpen(false);
        setFile('');
      }}
    >
     <Modal.Header className=""> Test Report </Modal.Header>
        
        <Modal.Body>
          <div>
            <div>
              {data.map((value,index)=> 
                <div className="pt-5">
                  <a href={value.link}  target="_blank">
                  {value.name}
                </a>
                </div>

              )}
            </div>
            <form onSubmit={handleSubmit} className='mt-5' >
            <div>
            <Label>
              Enter name of Report : 
            <input
              type='text'
              name="name"
              />
            </Label>
            </div>
            <div className='mt-5'>
            <input type="file" id="file" name="file" accept="application/*"
              onChange={(e) => { setFile(e.target.files[0]) }} 
            />
            </div>
            <Button className='mt-5' type='submit' >ADD</Button>
            </form>
        <br/>
       
            </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-between">
          <Button
            className="px-2 "
            color="gray"
            onClick={() => {
              setOpen(false);
              setFile('');
            }}
          >
            Cancel
          </Button>
          <Button
            
            className="px-2 "
            gradientDuoTone="cyanToBlue"
            onClick={()=>{setOpen(false);setFile('');}}
          >
            Submit
          </Button>
        </Modal.Footer>
    </Modal>
  </React.Fragment>
  )
}

export default TestReport