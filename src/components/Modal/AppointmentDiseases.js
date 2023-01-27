import axios from "axios";
import { Button, Label, Modal, Radio, Textarea } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { BaseUrl, ListDiseases, PostReport } from "../../APi/api";
import InputField from "../../Common/InputField";
import ModelViewWrapper from "./ModelViewWrapper";
const d = [
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
  "Futurionic Private",
];

const appointType = ["Regular", "Follow Up"];
const AppointmentDiseases = ({ open, setOpen, doctorData, doctorId }) => {
  const [disease, setDisease] = useState([]);
  const [others, setOthers] = useState(false);
  const [selected, setSelected] = useState("");
  const [appointTypeValue, setAppointTypeValue] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      // const {data}=await ListDiseases(doctorData.departmentId)
      const { data } = await ListDiseases(2);
      setDisease(data);
    };
    fetch();
  }, []);

  console.log(disease);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const props = {
    open: true,
    handleSubmit,
  };
  return (
    <React.Fragment>
      <ModelViewWrapper
        PrimaryButtonTitle={"next"}
        PrimaryButtonType="submit"
        modalHeaderTitle={"Select your Disease"}
        props={props}
      >
        <div className="grid  md:grid-cols-2 xl:grid-cols-3 gap-4 items-center ">
          {d.map((name, index) => (
            <>
              {/* "bg-blue-600 text-white" */}
              <p
                onClick={() => setSelected(index)}
                key={index}
                className={`${
                  selected === index && "bg-blue-600 text-white"
                } bg-white hover:bg-sky-500 hover:text-white shadow-sm rounded-full font-serif font-[500]  text-gray-700 cursor-pointer text-center py-2`}
              >
                {name}
              </p>
            </>
          ))}
        </div>

        <div className="pt-6">
          {!others ? (
            <p
              onClick={() => setOthers(true)}
              className="bg-white hover:bg-sky-500 hover:text-white shadow-sm rounded-full font-serif font-[500]  max-w-[263px] text-gray-700 cursor-pointer text-center py-2"
            >
              Others
            </p>
          ) : (
            <>
              <label>
                <span class="block uppercase text-gray-500 text-xs font-semibold mb-2">
                  Enter Disease name
                </span>
                <input
                  type="text"
                  name="disease"
                  className="border-none px-3 py-2.5 placeholder-blueGray-300 text-gray-700 bg-white rounded text-md shadow appearance-none focus:outline-none focus:ring-0  focus:border-cyan-200   w-full ease-linear active:outline-none "
                />
              </label>
            </>
          )}

        </div>
        <hr className="my-6   "/>
          <div className=" ">
            <span class="block uppercase text-gray-700 text-sm font-semibold mb-2">
              Appointment type
            </span>
            {appointType.map((name, index) => (
              <>
                <div
                  onClick={() => {}}
                  class="flex items-center  pl-1  rounded dark:border-gray-700"
                >
                  <input
                    onClick={(e) => {
                      setAppointTypeValue(e.target.value);
                    }}
                    id="bordered-radio-1"
                    type="radio"
                    value={name}
                    name="bordered-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="bordered-radio-1"
                    class="w-full py-2 ml-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {name}
                  </label>
                </div>
              </>
            ))}
          </div>
      </ModelViewWrapper>
      {/* <Modal
      show={true}
      size='4xl'
      position="center"
      onClose={() => {
        setOpen(false);
      }}
    >
      <div className="bg-green-200 rounded-md">
      
     <Modal.Header className=""> Test Report </Modal.Header>
        
        <Modal.Body>
            <div className='grid container mx-auto md:grid-cols-2   xl:grid-cols-3 xl:gap-x-5   gap-y-5   mt-16 place-items-center' >
              {disease.map((values)=>(
              <div className='text-base shadow-md  hover:bg-sky-500 hover:text-white cursor-pointer  py-1 px-3 bg-white border  rounded-md '>{values.name}</div>
              ))}
            </div>
            <div className='grid container mx-auto md:grid-cols-2   xl:grid-cols-2 xl:gap-x-5   gap-y-10   mt-16 place-items-center'>
              <div onClick={()=>setOthers(!others)}>
                others
              </div>
              {others &&<div>
                 <input className='' type="text" /> 
              </div>}
              <div >
                type of appointment
                <div className='mt-3'>
                  <input type="radio" id="normal" name="drone" value="normal" checked/>
                  <label className='ml-5' for="normal">normal Appointment</label>
                </div>
                <div className='mt-3'>
                  <input type="radio" id="follow" name="drone" value="follow"/>
                  <label className='ml-5'  for="follow">follow up Appointment</label>
                </div>
                
              </div>
            </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-between">
          <Button
            className="px-2 "
            color="gray"
            onClick={() => {
              setOpen(false);
            }}
          >
            prev
          </Button>
          <Button
            
            className="px-2 "
            gradientDuoTone="cyanToBlue"
            onClick={()=>{setOpen(false)}}
          >
            next
          </Button>
        </Modal.Footer>
        </div>
    </Modal> */}
    </React.Fragment>
  );
};

export default AppointmentDiseases;
