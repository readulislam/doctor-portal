import { Button, Label, Modal, Textarea } from 'flowbite-react';
import React from 'react'

const ShowPrexcription = ({open,setOpen,prescription}) => {
  return (
    <React.Fragment>
    <Modal
      show={open}
      position="center"
      onClose={() => {
        setOpen(false);
      }}
    >
     <Modal.Header className=""> Prescription </Modal.Header>
        
        <Modal.Body>
        
          <div id="textarea">
            <div className="mb-2 block">
                <Label
                htmlFor="Prescription"
                value=" Prescription"
                />
            </div>
            <Textarea
                id="Prescription"
                placeholder={prescription}
                disabled
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

export default ShowPrexcription