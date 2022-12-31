
import { Button, Label, Modal, Textarea, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { BaseUrl, PostPrescription } from '../../APi/api';


const UploadPrescription = ({open,setOpen,prescriptionData,setprescriptionData}) => {
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  
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
          const PrescriptionInfo = {
            patientId:prescriptionData.patientId,
            doctorId:prescriptionData.doctorId,
            appointmentId:prescriptionData.id,
            link: result.data.url,
            followUpDate:date
          };
          console.log(PrescriptionInfo);
          const data= await PostPrescription(PrescriptionInfo)
          console.log(data);
       
        }
      });
      setOpen(false)
      setImage('');
      setDate('')

  }
  return (
    <React.Fragment>
    <Modal
      show={open}
      position="center"
      onClose={() => {
        setOpen(false);
        setImage('');
      setDate('');
      }}
    >
     <Modal.Header className="">Upload Prescription </Modal.Header>
        
        <Modal.Body>
        <input type="file" 
          accept="image/*"
        onChange={(e) => { setImage(e.target.files[0]) }} />
        <br/>
        <Label  >
          Enter the Follow up date
          <TextInput id="email1" className="mt-4 w-full border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer" 
                      type="date" required={true} onChange={(e)=>{setDate(e.target.value)}} />
        </Label>
        
          
        </Modal.Body>
        <Modal.Footer className="flex justify-between">
          <Button
            className="px-2 "
            color="gray"
            onClick={() => {
              setOpen(false);
              setImage('');
              setDate('');
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

export default UploadPrescription