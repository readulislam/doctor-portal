import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';

const AvailabilityModal = ({setOpen,open,startTime,setStartTime,endTime,setEndTime,setEvent,event,eventDate}) => {
  const [startDate, setStartDate] = useState(new Date());
  const handleStartTime=(e)=>{
    setStartTime(startTime=>{return[...startTime,e.target.value]})
  }
  const handleEndTime=(e)=>{
    setEndTime(endTime=>{return[...endTime,e.target.value]})
  }
  const [input, setInput] = useState([
    {
      startDate:<input type="time" min="00:00" max="23:59" onChange={handleStartTime}/>,
      endDate:<input type="time" min="00:00" max="23:59" onChange={handleEndTime}/>
    }
  ]);
  const [endDate, setEndDate] = useState(null);

  const handleAdd=()=>{
    setInput(input=>{return[...input,{startDate:<input type="time" min="00:00" max="23:59" onChange={handleStartTime}/>,
  endDate:<input type="time" min="00:00" max="23:59" onChange={handleEndTime}/>}]})
  }
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const handleSubmit=()=>{
    setEvent(event=>{return[...event,{title:(startTime+' - '+endTime),date:eventDate}]});
    setOpen(false);
    setInput(input=>{return[{startDate:<input type="time" min="00:00" max="23:59" onChange={handleStartTime}/>,
  endDate:<input type="time" min="00:00" max="23:59" onChange={handleEndTime}/>}]})
  }
  return (
    <React.Fragment>
      <Modal show={open} position="center" onClose={() => {setOpen(false);setInput(input=>{return[{startDate:<input type="time" min="00:00" max="23:59" onChange={handleStartTime}/>,endDate:<input type="time" min="00:00" max="23:59" onChange={handleEndTime}/>}]})}}>
        <form>
          <Modal.Header>Enter Time</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 w-full p-6">
            <ReactDatePicker
              selected={startDate}
              className="w-full"
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />
                {input.map((value)=>(
                  <div>
                    {value.startDate} - {value.endDate} <Button onClick={()=>{setInput(input=>input.filter(input=>input!==value))}}>Delete</Button>
                  </div>
                ))}
                <Button onClick={handleAdd} >Add</Button>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-between">
            <Button color="gray" onClick={() => {setOpen(false);setInput(input=>{return[{startDate:<input type="time" min="00:00" max="23:59" onChange={handleStartTime}/>,endDate:<input type="time" min="00:00" max="23:59" onChange={handleEndTime}/>}]})}}>
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