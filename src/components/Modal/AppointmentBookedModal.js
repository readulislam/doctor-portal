import { Button, Modal } from 'flowbite-react'
import React from 'react'

const AppointmentBookedModal = ({setDone,done,name ,date,time}) => {
  return (
    <React.Fragment>
        <Modal show={done} position="center" onClose={() => setDone(false)}>
        <form>
          <Modal.Header>Appointment is booked </Modal.Header>
          <Modal.Body>
            <p>
                Doctor Name : <span>{name}</span>
            </p>
            <p>
                Patient Name : <span></span>
            </p>
            <p>Time : <span>{time}</span> </p>
            <p>Date : <span>{date}</span></p>
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