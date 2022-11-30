import { Button, Modal } from 'flowbite-react';
import React from 'react'

const AvailabilityModal = ({setOpen,open,setEvent,setEventTitle,eventTitle,event,eventDate}) => {
  return (
    <React.Fragment>
      <Modal show={open} position="center" onClose={() => setOpen(false)}>
        <form>
          <Modal.Header>Enter Time</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 p-6">
                <input type='text' onChange={(e)=>{setEventTitle(e.target.value)}}/>
            </div>
              

              
          </Modal.Body>
          <Modal.Footer className="flex justify-between">
            <Button color="gray" onClick={() => setOpen(false)}>
              Decline
            </Button>
            <Button
              className="px-2 "
              gradientDuoTone="cyanToBlue"
              onClick={()=>{setEvent(event=>{return[...event,{title:eventTitle,date:eventDate}]});setOpen(false);console.log(event);}}
            >
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </React.Fragment>
  )
}

export default AvailabilityModal