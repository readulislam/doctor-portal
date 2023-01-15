import { Button, Modal, Table } from 'flowbite-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import React from 'react'
import { useSelector } from 'react-redux';

const BillReceipt = ({doctorData,date,selected,open,setOpen}) => {
    const { userInfo, userId } = useSelector(
        (state) => state.Auth
      );
      console.log(date,selected);
      console.log(userInfo,'info');
      console.log("hi",doctorData,date,selected);
      const downloadBill=()=>{
        const doc=new jsPDF('landscape','px','a4','false')
        doc.setFillColor(240, 253,244)
        doc.rect(0,0,650,600,"F")
        doc.setFontSize(16)
        doc.setFont("","","bold")
        doc.text((doctorData.hospital.name).toUpperCase(),250,30)

        doc.setFontSize(12)
        doc.setFont("","","normal")
        doc.text(`ReceiptNumber :`,400,50)
        doc.setDrawColor("#457cb1")
        doc.setLineWidth(5)
        doc.line(20,10,610,10)
        doc.setLineWidth(2)
        doc.line(35,70,35,145)
        doc.setLineWidth(2)
        doc.line(390,70,390,145)
        doc.setTextColor("#457cb1")
        doc.setFont("","","bold")
        doc.setFontSize(16)
        doc.text('PATIENT INFORMATION',40,80)
        doc.text('DOCTOR INFO',400,80)
        doc.setTextColor("#1e1e1e")

        doc.text(`Name :  ${doctorData.name}`,400,95)
        
        doc.text(`Name : ${(userInfo?.firstName).toUpperCase()}  ${(userInfo?.middleName).toUpperCase()}`,40,95)

        doc.setFontSize(12)
        doc.setFont("","","normal")
        doc.text(`Contact : ${doctorData.contactNo}`,400,110)
        doc.text(`Speciality : ${doctorData.department.name}`,400,125)
        doc.text(`Hospital location : ${doctorData.hospital.address}`,400,140)
        doc.text(`Contact : ${userInfo?.contact}`,40,110)
        doc.text(`address : ${userInfo?.address}`,40,125)
        doc.text(`city,state : ${userInfo?.city} , ${userInfo?.state}`,40,140)
        //Appointment Detail
        
        doc.setLineWidth(1)
        
        doc.line(35,170,580,170)

       
        doc.text('Appointment number',40,180)
        //doc.text(appintment value,40,195)

        

        doc.text('date',300,180)
        doc.text("date",300,195)

        

        doc.text('time',490,180)
        doc.text("selected?.time",490,195)

        doc.line(35,200,580,200)
        
        
        autoTable(doc, {
          startY:230,
          head: [['Code','Descrition of Service', 'Rate','total']],
          body: [
            ['101','Consultation Charge', '800','800'],
            [],
            [],
            [],
            [],
            ['','','','total = 800']
            // ...
          ], 
          margin: { horizontal: 20 },
          styles: { overflow: 'linebreak',cellPadding:5 ,fontSize:14},
          bodyStyles: { valign: 'top' },
          columnStyles: { total: { columnWidth: 'wrap' } },
          theme: "striped"
        })
        // doc.text('total = 800',530,410)
        
        doc.save('bil.pdf')
      }
     
const r = (Math.random() * 100000)
  return (
    <React.Fragment>
      <Modal show={open} position="center" onClose={() => setOpen(false)}>
        <Modal.Header className='justify-between' >Appoinment is Confirm </Modal.Header>
        <Modal.Body>
         <div>
          <div id='bill' className='flex' >
              <div className='w-1/2' >
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Receipt Number: <span className="text-black">{r}</span>
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Hospital name : <span className="text-black">
                  {doctorData?.hospital?.name}
                  </span>
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Doctor Name : <span className="text-black">
                  {doctorData?.name}
                  </span>
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Appointment number : <span className="text-black"></span>
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Hospital location : <span className="text-black">
                  {doctorData?.hospital?.address}
                  </span>
                </p>
                </div>
              </div>
              <div className='w-1/2' >
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Date & Time : <span className="text-black">
                    {date} & {selected?.time}
                  </span>
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  patient Information
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Patient name : <span className="text-black">
                  {userInfo?.firstName+' '+userInfo?.middleName}
                  </span>
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Address: <span className="text-black">
                      {userInfo?.address}
                  </span>
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  Phone Number : <span className="text-black">
                  {userInfo?.contact}
                  </span>
                </p>
                </div>
                <div className='pb-3'>
                  <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                  State/City : <span className="text-black">

                  {/* {userInfo.state+" / "+userInfo.city} */}
                  </span>
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
              <div className="flex justify-end"><Button onClick={downloadBill} >download Receipt</Button></div>
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
