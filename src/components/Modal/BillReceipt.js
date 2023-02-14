import { Button, Modal, Table } from 'flowbite-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import React from 'react'
import { useSelector } from 'react-redux';

const BillReceipt = ({doctorData,appointment,serialNO,open,setOpen}) => {
    const { userInfo, userId } = useSelector(
        (state) => state.Auth
      );
      const r = (Math.random() * 100000)
      const downloadBill=()=>{
        const doc=new jsPDF('landscape','px','a4','false')
        doc.setFillColor(240, 253,244)
        doc.rect(0,0,650,600,"F")
        doc.setFontSize(16)
        doc.setFont("","","bold")
        doc.text((doctorData.hospital.name).toUpperCase(),250,30)

        doc.setFontSize(12)
        doc.setFont("","","normal")
        doc.text(`ReceiptNumber :${r}`,400,50)
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
        
        doc.text(`Name : ${(userInfo?.firstName).toUpperCase()}  ${(userInfo?.lastName).toUpperCase()}`,40,95)

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
        doc.text(`${serialNO}`,40,195)

        

        doc.text('date',300,180)
        doc.text(appointment?.date,300,195)

        

        doc.text('time',490,180)
        doc.text(appointment?.time,490,195)

        doc.line(35,200,580,200)
        
        
        autoTable(doc, {
          startY:230,
          head: [['Code','Descrition of Service', 'Rate','total']],
          body: [
            ['101','Consultation Charge', (appointment.appointmentType==="Regular") ?(doctorData.basicCharges):(doctorData.followupCharges),'800'],
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
     

  return (
    <React.Fragment>
      <Modal size={'xl'} show={open}  className="bg-gray-900 " position="center"  onClose={() => setOpen(false)}>
      <div className="bg-green-200 rounded-md ">
    
        <Modal.Body>
         <div>
         <div className='text-md  w-full  ml-5 '>
             
            Your Appointment Detail are Below :
           
            </div>
         
          <div className="flex flex-col  text-md  w-full  ml-5 ">
            
            <div>
              <p className="text-xs pt-1 leading-relaxed  text-gray-500 dark:text-gray-400">
                Date :{appointment.date}
              </p>

              <p className=" leading-relaxed text-xs  text-gray-500 dark:text-gray-400">
                AP No : {serialNO}
              </p>

              <p className="  leading-relaxed text-xs text-gray-500 dark:text-gray-400">
                Time :{appointment?.time}
              </p>
            </div>
            
          </div>
          <div className=' ml-5  w-full'>
              <p className="leading-relaxed text-xs   text-gray-600 dark:text-gray-400 mb-2">
              Here are the details of charges
            </p>
            </div>
          <Table striped={true} className="mt-2 ">
            <Table.Head>
              <Table.Cell>Descrition of Service</Table.Cell>
              <Table.Cell>Charges</Table.Cell>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Consultation Charge</Table.Cell>
              <Table.Cell>{(appointment.appointmentType==="Regular") ?(doctorData.basicCharges):(doctorData.followupCharges)}Rs</Table.Cell>
              </Table.Row>
            </Table.Body>
            
          </Table>
          {/* <div className="flex justify-end"><p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                Total: <span className="text-black">800 Rs</span>
              </p></div>*/}
         </div> 
        </Modal.Body>
        <Modal.Footer className='flex !py-3 justify-between  w-full' >
          <Button color="gray" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button
          title='Download Receipt'
            color
            className="px-2 "
            gradientDuoTone="cyanToBlue"
            onClick={downloadBill}
          >
           Download Receipt
          </Button>
        </Modal.Footer>
      </div>
        
      </Modal>
      
    </React.Fragment>
  )
}

export default BillReceipt
