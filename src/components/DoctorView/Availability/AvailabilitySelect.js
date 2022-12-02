import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" ;
import AvailabilityModal from '../../Modal/EventModal'
import { Alert } from 'flowbite-react';

const AvailabilitySelect = () => {
  const [startTime, setStartTime] = useState({});
  const [endTime, setEndTime] = useState({});
  const [eventDate, setEventDate] = useState('');
  const [event, setEvent] = useState([]);
  const [open, setOpen] = useState(false);
  const handleEventClick=(info)=>{
    console.log(info.event);
     setEvent((event)=>event.filter((event)=>(event.title!==info.event.title && event.date!==info.event.start.str))) 
  }
  const handleClick=(arg)=>{
    setOpen(true);
    setEventDate(arg.dateStr)
    
    console.log(eventDate);
  }
  return (
    <React.Fragment>
      <FullCalendar
        plugins={[interactionPlugin, dayGridPlugin]}
        initialView="dayGridMonth"
        droppable= {true}
        weekends={false}
        eventClick={handleEventClick}
        dateClick={handleClick}
        events={event}
      />
      <AvailabilityModal open={open} setOpen={setOpen} setEvent={setEvent} startTime={startTime} setStartTime={setStartTime} endTime={endTime} setEndTime={setEndTime} event={event} eventDate={eventDate} />
    </React.Fragment>
    
  )
}

export default AvailabilitySelect