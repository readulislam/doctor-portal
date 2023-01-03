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



  const handleSubmit=async()=>{
    // const formData = new FormData();
    // formData.append("image", image);
    // formData.append("patientId", reportData.patientId);
    // formData.append("doctorId", reportData.doctorId);
    // formData.append("appointmentId", reportData.id);
    // formData.append("name", image.name);
    const key = "79c2ec0f6d6859d731f98a37a94e5c70";
    const formData = new FormData();
    formData.append("image", image);
 
    fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async(result) => {
        if (result) {
       
          const reportInfo = {
            patientId:reportData.patientId,
            doctorId:reportData.doctorId,
            appointmentId:reportData.id,
            link: result.data.url,
            name:image.name
          };
          
          const data= await PostReport(reportInfo)
          
       
        }
      });
    
    
    
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
            <div className='mt-5' >
            <input type="file" 
              accept="image/*"
              placeholder='image'
              onChange={(e) => { setImage(e.target.files[0]) }} 
            />
            <Button onClick={handleSubmit} >ADD</Button>
            </div>
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