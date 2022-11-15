import { Button, Modal } from 'flowbite-react'
import React from 'react'

const AppointmentBookedModal = ({setDone,done,name}) => {
  return (
    <React.Fragment>
        <Modal show={done} position="center" onClose={() => setDone(false)}>
        <form>
          <Modal.Header>Book An Appointment</Modal.Header>
          <Modal.Body>
          <h1>
                Appointment is Booked
            </h1>
            <p>
                Doctor Name
                <span>{name}</span>
            </p>
            <p>
                Patient Name
                <span></span>
            </p>
            <p>Time of Slot<span></span> Date<span></span></p>
          </Modal.Body>
          <Modal.Footer className="flex justify-between">
            <Button
              type="submit"
              className="px-2 "
              gradientDuoTone="cyanToBlue"
              onClick={()=>setDone(false)}
            >
              Done
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </React.Fragment>
  )
}

export default AppointmentBookedModal