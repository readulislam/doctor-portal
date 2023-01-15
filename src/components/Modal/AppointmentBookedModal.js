import { Button, Modal } from 'flowbite-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import BillReceipt from './BillReceipt';

const AppointmentBookedModal = ({setOpen,open,doctorData,date,selected}) => {
  const { userInfo, userId } = useSelector(
    (state) => state.Auth
  );
  console.log("hiiiiii");
  const [openBillReceipt, setOpenBillReceipt] = useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault()
    // const data = await AddDoctorAppointment({
      //   doctorId,
      //   patientId: userId,
      //   time: selected.time,
      //   timeSlotId: selected.id,
      //   requestedByEmail: "",
      //   requestedByPhone: "",
      //   date,
      //   status: false,
      // });

      // setAppointment(data)
      // if (data) {
      //   // doctorId, date, timeRange, slotId
      //   const query = {
      //     doctorId,
      //     timeRange: slotsInfo.timeRange,
      //     slotId: selected.id,
      //     date,
      //     weekday: slotsInfo.weekday,
      //   };
      //   const update = await updateTimeSlot(query);
      // }
    setOpenBillReceipt(true)
  }
  return (
    <React.Fragment>
        <Modal show={open} position="center" onClose={() => setOpen(false)}>
        <form>
          <Modal.Header>Confirm the  Appointment </Modal.Header>
          <Modal.Body>
           <div>
            <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
              Thank You <span className="text-black">{userInfo?.firstName+' '+userInfo?.middleName +" "}</span>
              for entrusting Your health to us 
            </p>
            <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400 pt-4" >Your Appointment Detail are Below</p>
            <div className='flex' >
              <div className='w-1/2'>
                <div className='pt-5'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Appointment number : <span className="text-black"></span>
                  </p>
                </div>
                <div className='pt-5'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Doctor Name : <span className="text-black">
                    {doctorData?.name}
                    </span>
                  </p>
                </div>
                <div className='pt-5'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Hospital name : <span className="text-black">
                    {doctorData?.hospital?.name+", "+doctorData?.hospital?.address}
                    </span>
                  </p>
                </div>
                
              </div>
              <div className='w-1/2' >
                <div className='pt-5'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                   Appointment Date : <span className="text-black">
                    {date} 
                    </span>
                  </p>
                </div>
                <div className='pt-5'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                   Appointment  Time : <span className="text-black">
                    {selected?.time}
                    </span>
                  </p>
                </div>
                <div className='pt-5'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Consultation Charge : <span className="text-black">800 Rs</span>
                  </p>
                </div>
                <div className='pt-5'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Patient name : <span className="text-black">
                    {userInfo?.firstName+' '+userInfo?.middleName}
                    </span>
                  </p>
                </div>
              </div>
            </div>
           </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-between">
            <Button color="gray" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-2 "
              gradientDuoTone="cyanToBlue"
              onClick={handleSubmit}
            >
              Confirm
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      {openBillReceipt && 
        <BillReceipt
          open={openBillReceipt}
          setOpen={setOpenBillReceipt}
          doctorData={doctorData}
          date={date}
          selected={selected}
        />
      }
    </React.Fragment>
  )
}

export default AppointmentBookedModal