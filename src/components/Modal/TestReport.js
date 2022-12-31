import { Button, Label, Modal, Textarea } from 'flowbite-react';
import React, { useState } from 'react'

const TestReport = ({open,setOpen}) => {
  const [image, setImage] = useState('');
  
  const handleSubmit=()=>{
    console.log(image);

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
          // const ReportInfo = {
          //   appointmentId:'',
          //   patientId:'',
          //   doctorId:'',
          //   report: result.data.url,
          // };
       
        }
      });
      setOpen(false)

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
          <input type="file" 
          accept="image/*"
        onChange={(e) => { setImage(e.target.files[0]) }} />
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
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Modal.Footer>
    </Modal>
  </React.Fragment>
  )
}

export default TestReport