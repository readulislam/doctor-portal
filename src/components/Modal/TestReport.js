import axios from 'axios';
import { Button, Label, Modal, Textarea } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { BaseUrl, PostReport } from '../../APi/api';

const TestReport = ({open,setOpen,reportData,reload,setReload,setReportData}) => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState('');
  
  
  useEffect(() => {
    const reportfetch=async()=>{
          const {data}=await axios.get(`${BaseUrl}/get-testReports?patientId=${reportData.patientId}&doctorId=${reportData.doctorId}&appointmentId=${reportData.id}`)
          setData(data)
          }
    reportfetch()
}, [reload,reportData.id])



  const handleSubmit=async(e)=>{
    e.preventDefault()
    const reportInfo = new FormData();
    reportInfo.append("image", image);
    reportInfo.append("patientId", reportData.patientId);
    reportInfo.append("doctorId", reportData.doctorId);
    reportInfo.append("appointmentId", reportData.id);
    reportInfo.append("name", e.target.name.value);
    const data= await PostReport(reportInfo)
    setReload(!reload)
    setImage('');

  }
  return (
    <React.Fragment>
    <Modal
      show={open}
      position="center"
      onClose={() => {
        setOpen(false);
        setImage('');
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
            <input type="file" 
              accept="image/*"
              placeholder='image'
              onChange={(e) => { setImage(e.target.files[0]) }} 
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
              setImage('');
            }}
          >
            Cancel
          </Button>
          <Button
            
            className="px-2 "
            gradientDuoTone="cyanToBlue"
            onClick={()=>{setOpen(false);setImage('');}}
          >
            Submit
          </Button>
        </Modal.Footer>
    </Modal>
  </React.Fragment>
  )
}

export default TestReport