import { Button, Modal, Table } from 'flowbite-react';
import jsPDF from 'jspdf';
import React from 'react'
import { useSelector } from 'react-redux';

const BillReceipt = ({doctorData,date,selected,open,setOpen}) => {
    const { userInfo, userId } = useSelector(
        (state) => state.Auth
      );
      console.log("hi",doctorData,date,selected);
      const downloadBill=()=>{
        const doc=new jsPDF('landscape','px','a4','false')
        doc.text('Bill Receipt',270,10)
        doc.text(`Receipt's Number : `,10,50)

        doc.text(`Hospital name : ${doctorData.hospital.name}`,10,80)
        doc.text(`Doctor's name : ${doctorData.name}`,10,100)
        doc.text(`Appointment number : `,10,120)
        doc.text(`Hospital location : ${doctorData.hospital.address}`,10,140)

        doc.text(`date and time of appointment : ${date}  ${selected.time}`,350,50)

        doc.text('patient Information',350,80)
        doc.text(`patient's name : ${userInfo.firstName}  ${userInfo.middleName}`,350,100)
        doc.text(`Address : ${userInfo.address}`,350,120)
        doc.text(`Phone Number : ${userInfo.contact}`,350,140)
        doc.text(`State/City : ${userInfo.state} / ${userInfo.city}`,350,160)
        
        doc.text(`Consultation Charge`,10,210)
        doc.text(`800`,350,210)
        
        doc.save('bil.pdf')
      }
     

  return (
    <React.Fragment>
      <Modal show={open} position="center" onClose={() => setOpen(false)}>
        <Modal.Header className='justify-between' >Bill Receipt</Modal.Header>
        <Modal.Body>
         <div>
          <div className='flex' >
              <div className='w-1/2' >
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Receipt Number: <span className="text-black"></span>
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Hospital name : <span className="text-black">{doctorData.hospital.name}</span>
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Doctor Name : <span className="text-black">{doctorData.name}</span>
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Appointment number : <span className="text-black"></span>
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Hospital location : <span className="text-black">{doctorData.hospital.address}</span>
                </p>
                </div>
              </div>
              <div className='w-1/2' >
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Date & Time appointment : <span className="text-black">{date} & {selected.time}</span>
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  patient Information
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Patient name : <span className="text-black">{userInfo?.firstName+' '+userInfo?.middleName}</span>
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Address: <span className="text-black">{userInfo.address}</span>
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Phone Number : <span className="text-black">{userInfo.contact}</span>
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  State/City : <span className="text-black">{userInfo.state+" / "+userInfo.city}</span>
                </p>
                </div>
              </div>
          </div>
          <Table striped={true}>
            <Table.Head>
              <Table.Cell>Descrition of Service</Table.Cell>
              <Table.Cell>Charges</Table.Cell>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Consultation Charge</Table.Cell>
              <Table.Cell>800 Rs</Table.Cell>
              </Table.Row>
            </Table.Body>
            
          </Table>
          <div className="flex justify-end"><p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                Total: <span className="text-black">800 Rs</span>
              </p></div>
              <div className="flex justify-end"><Button onClick={downloadBill} >download</Button></div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpen(false)}>
            Decline
          </Button>
          <Button
            color
            className="px-2 "
            gradientDuoTone="cyanToBlue"
            onClick={() => setOpen(false)}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default BillReceipt