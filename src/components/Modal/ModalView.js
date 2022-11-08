import { Button, Modal, TextInput } from "flowbite-react";
import React from "react";

const ModalView = ({ open, setOpen }) => {
  const slots = [
    { id: 1, slot: "9:15" ,status:true},
    { id: 1, slot: "9:15" ,status:true},
    { id: 1, slot: "9:15" ,status:true},
    { id: 1, slot: "9:15" ,status:true},
    { id: 1, slot: "9:15" ,status:true},
    { id: 1, slot: "9:15" ,status:true},
    { id: 1, slot: "9:15" ,status:true},
    { id: 1, slot: "9:15" ,status:true},
    { id: 1, slot: "9:15" ,status:true},
    { id: 1, slot: "9:15" ,status:true},
    { id: 1, slot: "9:15" ,status:true},
    { id: 1, slot: "9:15" ,status:false},
    { id: 1, slot: "9:15" ,status:false},
    { id: 1, slot: "9:15" ,status:false},
    { id: 1, slot: "11:00" ,status:false},
    { id: 1, slot: "11:00" ,status:false},
    { id: 1, slot: "11:00" ,status:false},
    { id: 1, slot: "9:15" ,status:false},
    { id: 1, slot: "10:45" ,status:false},
    { id: 1, slot: "10:45" ,status:false},
    { id: 1, slot: "10:45" ,status:false},
    { id: 1, slot: "10:45" ,status:false},
    { id: 1, slot: "10:45" ,status:false},
    { id: 1, slot: "10:45" ,status:false},
    { id: 1, slot: "10:45" ,status:false},
    { id: 1, slot: "10:45" ,status:false},
    { id: 1, slot: "10:45" ,status:false},
  ]
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
                value={"Paras Hospitals, Delhi"}
              />
              <TextInput
                id="email1"
                type="text"
                placeholder="name@flowbite.com"
                disabled
                value={"Medical Oncology"}
              />
              <TextInput
                id="email1"
                type="text"
                placeholder="name@flowbite.com"
                disabled
                value={"Dr. Himanshu Dotto"}
              />

              <TextInput id="email1" type="date" required={true} />
            </div>

            <p className="text-base leading-relaxed  text-gray-500 dark:text-gray-400">
              Consultation Charge : <span className="text-black">800 Rs</span>
            </p>
            <div className="grid grid-cols-6 gap-4">
              {slots.map((data) => (
                <div  className={`text-base ${data.status? 'bg-gray-400/10 text-gray-400/50' :'shadow-md hover:bg-sky-500 hover:text-white cursor-pointer '} border   py-1 px-3 text-center rounded-md`}>{data.slot}</div>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-between">
          <Button color='gray'
          onClick={() => setOpen(false)}
          >
            Decline
           
          </Button>
          <Button type="submit" className="px-2 " gradientDuoTone="cyanToBlue" >
           Submit
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default ModalView;
