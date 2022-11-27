import { Button, Modal, TextInput } from 'flowbite-react'
import React from 'react'
import OtpInput from 'react-otp-input'

const OtpVerifyModal = ({open,setOpen,handleOtpSubmit}) => {
  return (
    <React.Fragment>
        <Modal show={open} position="center" onClose={() => {setOpen(false)}}>
        <form>
          <Modal.Header className=''>Verify Otp</Modal.Header>
          <Modal.Body className='ml-10'>
          <TextInput
            id="phone"
            className='mb-4'
            type="number"
            placeholder="9876543210"
            disabled
            
           />
            <OtpInput 
            numInputs={5}
            className=""
            separator={<span> - </span>}
            />
          </Modal.Body>
          <Modal.Footer className="flex justify-between">
            <Button
              type="submit"
              className="px-2 "
              gradientDuoTone="cyanToBlue"
              onClick={()=>{setOpen(false);handleOtpSubmit()}}
            >
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </React.Fragment>
  )
}

export default OtpVerifyModal