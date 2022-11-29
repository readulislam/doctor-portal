import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" 

const AvailabilitySelect = () => {
  const handleClick=(arg)=>{
    console.log(arg);
  }
  return (
    <FullCalendar
        plugins={[interactionPlugin, dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        dateClick={handleClick}

      />
  )
}

export default AvailabilitySelect