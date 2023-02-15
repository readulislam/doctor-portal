import { Button, Card, Modal } from 'flowbite-react'
import React, { useState } from 'react'
import ModelViewWrapper from './ModelViewWrapper';


const DoctorDetail = ({doctorData,open,setOpen}) => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  return (
    <div>
        <Modal show={open} position="center" onClose={() => setOpen(false)}>
        <Modal.Header>Book An Appointment</Modal.Header>
        <Modal.Body>
            <Card
        horizontal={true}
        className="h-80"
        imgSrc={doctorData.img}
    >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {doctorData?.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        {doctorData?.designation}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        {doctorData?.department.name}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        {doctorData?.education}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        {doctorData?.experience}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        {doctorData?.hospital.name+ ', '+doctorData?.hospital.address}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        {doctorData?.contactNo}
        </p>
        </Card>
            <div>
                <Button
                  onClick={() => {setAppointmentOpen(true)}}
                  className="w-auto mt-10 rounded-full"
                  gradientDuoTone="cyanToBlue"
                >
                  Book an Appointment
                </Button>
              </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-between">
            <Button color="gray" onClick={() => setOpen(false)}>
              Close
            </Button>
          </Modal.Footer>
      </Modal>
        {appointmentOpen && <ModelViewWrapper doctorData={doctorData} doctorid={doctorData.id} open={appointmentOpen} setOpen={setAppointmentOpen} /> }
  </div>
  )
}

export default DoctorDetail