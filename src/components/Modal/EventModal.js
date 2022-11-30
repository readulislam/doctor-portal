import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';

const AvailabilityModal = ({setOpen,open,setEvent,setEventTitle,eventTitle,event,eventDate}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [input, setInput] = useState([
    {
      inputTag:<input type='text' onChange={(e)=>{setEventTitle(e.target.value)}}/>
    },
  ]);
  const [endDate, setEndDate] = useState(null);
  const handleAdd=()=>{
    setInput(input=>{return[...input,{inputTag:<input type='text' onChange={(e)=>{setEventTitle(e.target.value)}}/>}]})
  }
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const handleSubmit=()=>{
    setEvent(event=>{return[...event,{title:eventTitle,date:eventDate}]});
    setOpen(false);
    console.log(event);
  }
  return (
    <React.Fragment>
      <Modal show={open} position="center" onClose={() => {setOpen(false)}}>
        <form>
          <Modal.Header>Enter Time</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 p-6">
            <ReactDatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />
                {input.map((value)=>(
                  <div>
                    {value.inputTag}
                  </div>
                ))}
                <Button onClick={handleAdd} >Add</Button>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-between">
            <Button color="gray" onClick={() => setOpen(false)}>
              Decline
            </Button>
            <Button
              className="px-2 "
              gradientDuoTone="cyanToBlue"
              onClick={handleSubmit}
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