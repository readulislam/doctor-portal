import { Button, Label, Modal, Textarea } from 'flowbite-react';
import React from 'react'

const UploadPrescription = ({open,setOpen}) => {
  return (
    <React.Fragment>
    <Modal
      show={open}
      position="center"
      onClose={() => {
        setOpen(false);
      }}
    >
     <Modal.Header className="">Upload Prescription </Modal.Header>
        
        <Modal.Body>
        <input type="file" id="file" name="file" accept="application/*"  />
          <div id="textarea">
            <div className="mb-2 block">
                <Label
                htmlFor="Prescription"
                value="Upload Prescription"
                />
            </div>
            <Textarea
                id="Prescription"
                placeholder="Leave a Prescription..."
                required={true}
                onChange={()=>{}}
                rows={20}
            />
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
            onClick={() => {
              setOpen(false);
            //   handleOtpSubmit();
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
    </Modal>
  </React.Fragment>
  )
}

export default UploadPrescription