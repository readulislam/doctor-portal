import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction" ;
import AvailabilityModal from '../../Modal/EventModal'
import { Alert, Button, Checkbox, Label } from 'flowbite-react';

const AvailabilitySelect = () => {
  const [open, setOpen] = useState(false);
  const [startMondaytime, setStartMondaytime] = useState([]);
  const [endMondaytime, setEndMondaytime] = useState([]);
  const [startTuesdaytime, setStartTuesdaytime] = useState([]);
  const [endTuesdaytime, setEndTuesdaytime] = useState([]);
  const [startWednesdaytime, setStartWednesdaytime] = useState([]);
  const [endWednesdaytime, setEndWednesdaytime] = useState([]);
  const [startThrusdaytime, setStartThrusdaytime] = useState([]);
  const [endThrusdaytime, setEndThrusdaytime] = useState([]);
  const [startFridaytime, setStartFridaytime] = useState([]);
  const [endFridaytime, setEndFridaytime] = useState([]);
  const [startSaturdaytime, setStartSaturdaytime] = useState([]);
  const [endSaturdaytime, setEndSaturdaytime] = useState([]);
  const [startSundaytime, setStartSundaytime] = useState([]);
  const [endSundaytime, setEndSundaytime] = useState([]);
  const [startMondaySlotTime, setStartMondaySlotTime] = useState();
  const [startTuesdaySlotTime, setStartTuesdaySlotTime] = useState();
  const [startWednesdaySlotTime, setStartWednesdaySlotTime] = useState();
  const [startThrusdaySlotTime, setStartThrusdaySlotTime] = useState();
  const [startFridaySlotTime, setStartFridaySlotTime] = useState();
  const [startSaturdaySlotTime, setStartSaturdaySlotTime] = useState();
  const [startSundaySlotTime, setStartSundaySlotTime] = useState();
  const [input, setInput] = useState([
    {
      startDate:<input type="time" min="00:00" max="23:59" onChange={()=>{}}  />,
      endDate:<input type="time" min="00:00" max="23:59" onChange={()=>{}}/>
    }
  ]);
  const handleAdd=()=>{
    setInput(input=>{return[...input,{startDate:<input type="time" min="00:00" max="23:59" onChange={()=>{}} />,
  endDate:<input type="time" min="00:00" max="23:59" onChange={()=>{}}/>}]})
  }
  return (
    <React.Fragment>
     <div className='flex'>
      <div
          className="flex flex-col gap-4 w-4/5"
          id="checkbox"
        >
          <div className="flex items-center gap-2">
            <Checkbox
              id="Sunday"
              disabled
            />
            <Label htmlFor="Sunday">
              Sunday
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="Monday" 
            defaultChecked={true}
            />
            <Label htmlFor="Monday">
              Monday
            </Label>
            {input.map((value)=>(
                  <div className='flex ml-20 gap-5'>
                    {value.startDate} - {value.endDate} <Button onClick={()=>{setInput(input=>input.filter(input=>input!==value))}}>Delete</Button>
                  </div>
                ))}
            <Button className='right-0' onClick={handleAdd} >Add</Button>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="Tuesday" defaultChecked={true}/>
            <Label htmlFor="Tuesday">
              Tuesday
            </Label>
          </div>
          <div className="flex  items-center gap-2">
            <Checkbox id="Wednesday" defaultChecked={true}/>
            <Label htmlFor="Wednesday" >
              Wednesday
            </Label>
          </div>
          <div className="flex  items-center gap-2">
            <Checkbox id="Thrusday" defaultChecked={true}/>
            <Label htmlFor="Thrusday" >
              Thrusday
            </Label>
          </div>
          <div className="flex  items-center gap-2">
            <Checkbox id="Friday" defaultChecked={true}/>
            <Label htmlFor="Friday" >
              Friday
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="disabled"
              disabled={true}
            />
            <Label
              htmlFor="disabled"
              disabled={true}
            >
              Saturday
            </Label>
          </div>
        </div>
      <div className='w-1/5' >
        <div>
          <h2 className='font-bold' >Add Date Overrrides</h2>
          <p className='font-light' >Add dates when your availability changes from your weekly hours</p>
          <Button onClick={()=>setOpen(true)} >Add a date Over Ride</Button>
        </div>
      </div>
     </div>
     <AvailabilityModal open={open} setOpen={setOpen}/>
    </React.Fragment>
    
  )
}

export default AvailabilitySelect