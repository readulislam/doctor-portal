import axios from "axios";
import { Button, Modal, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../../APi/api";

const ModalView = ({ open, setOpen ,name,location,speciality,existingUser,setDone,doctorId,setRegistarOpen,setTime}) => {
  const [date, setDate] = useState("");
  const [selected, setSelected] = useState(null);
  const [slotsInfo, setSlotsInfo] = useState(null);
  const selectedSlot = (id) => {
    setSelected(id);
  };
 
  useEffect(()=>{
    const fetching = async()=>{
      if(date && doctorId){
        console.log(date)
        const splitting = date.split('-');
        const newDate = splitting[2]+'/'+splitting[1] +'/'+splitting[0]
        console.log(newDate,doctorId);
        const {data} = await axios.post(`${BaseUrl}/get-slots?date=${newDate}&doctorId=${doctorId}`)
        console.log(data)
        setSlotsInfo(data)
       }
      
    }
    fetching()
  },[date,doctorId])
  return (
    <React.Fragment>
      <Modal show={open} position="center" onClose={() => setOpen(false)}>
        <form>
          <Modal.Header>Book An Appointment</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 p-6">
              <div className="grid grid-cols-2 gap-4 ">
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="name@flowbite.com"
                  disabled
                  value={location}
                />
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="name@flowbite.com"
                  disabled
                  value={speciality}
                />
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="name@flowbite.com"
                  disabled
                  value={name}
                />

                <TextInput  id="date" type="date" required={true} onChange={(e)=>{setDate(e.target.value);}} />
              </div>

              <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                Consultation Charge : <span className="text-black">800 Rs</span>
              </p>
              {slotsInfo.data &&  <h3 className="font-semibold w-full  text-center text-xl">{slotsInfo.data}</h3>}
              <div className="grid grid-cols-6 gap-4">
               {slotsInfo.slots &&  slotsInfo?.slots?.map((data) => (
                  <div
                    onClick={() => selectedSlot(data.id)}
                    className={`text-base ${
                      selected === data.id && "bg-blue-600 text-white"
                    } ${
                      !data.isAvailable
                        ? "bg-gray-400/10 text-gray-400/50"
                        : "shadow-md hover:bg-sky-500 hover:text-white cursor-pointer  "
                    } border   py-1 px-3 text-center rounded-md`}
                  >
                    {data.time }
                  </div>
                ))}
              </div>
              <div>
               {!slotsInfo.data &&  <input
                id="number"
                className="w-full"
                type="number"
                placeholder=" "
                />}
              </div>
              {existingUser && <select
              id="underline_select"
              className=" py-2.5  w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
            >
              <option selected>From Whom You Booking</option>
              <option value="JA">user</option>
            </select>}
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-between">
            <Button color="gray" onClick={() => setOpen(false)}>
              Decline
            </Button>
            <Button
              type="submit"
              className="px-2 "
              gradientDuoTone="cyanToBlue"
              onClick={()=>{if(existingUser){
                setDone(true);setOpen(false)
              }else{
                setRegistarOpen(true);setOpen(false)
              }
                }}
            >
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default ModalView;
