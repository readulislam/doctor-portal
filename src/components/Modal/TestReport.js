import { Button, Label, Modal, Textarea } from 'flowbite-react';
import React, { useState } from 'react'

const TestReport = ({open,setOpen,reportData,setReportData}) => {
  const [data, setdata] = useState();
  const [image, setImage] = useState('');
  
  const handleSubmit=()=>{
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
       console.log(result.data.url)
          const PrescriptionInfo = {
            patientId:reportData.patientId,
            doctorId:reportData.doctorId,
            appointmentId:reportData.id,
            link: result.data.url,
            name:image.name
          };
          console.log(PrescriptionInfo);
          const data= await PostPrescription(PrescriptionInfo)
          console.log(data);
       
        }
      });
    console.log(image);

  }
  return (
    <React.Fragment>
    <Modal
      show={open}
      position="center"
      onClose={() => {
        setOpen(false);
      }}
    >
     <Modal.Header className=""> Test Report </Modal.Header>
        
        <Modal.Body>
          <div>
            <div>
              {data.map((value,index)=> 
                <a href={value.link} target="_blank">
                  {value.name}
                </a>
              )}
            </div>
            <div>
            <input type="file" 
              accept="image/*"
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
            }}
          >
            Cancel
          </Button>
          <Button
            
            className="px-2 "
            gradientDuoTone="cyanToBlue"
            onClick={()=>{setOpen(false)}}
          >
            Submit
          </Button>
        </Modal.Footer>
    </Modal>
  </React.Fragment>
  )
}

export default TestReport