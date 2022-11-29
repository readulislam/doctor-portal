import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" ;
import availabilityModal from '../../Modal/eventModal'

const AvailabilitySelect = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState('');
  const [event, setEvent] = useState([]);
  const [open, setOpen] = useState(false);
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
        weekends={false}
        dateClick={handleClick}
        event={event}
      />
      <availabilityModal open={open} setOpen={setOpen} setEvent={setEvent} setEventTitle={setEventTitle} eventTitle={eventTitle} eventDate={eventDate} />
    </React.Fragment>
    
  )
}

export default AvailabilitySelect