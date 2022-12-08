import { Button, Modal, TextInput } from 'flowbite-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useState } from 'react'
import { genderValue, title } from '../../Utils/mockData';
import axios from 'axios';
import { BaseUrl } from '../../APi/api';

const RegistarModal = ({setDone, open ,setOpen,number,location}) => {
  const [personTitle, setPersonTitle] = useState("");
  const [data, setData] = useState({title:"",firstName:"",middleName:"",lastName:"",contact: "",
  dateOfBirth: "",
  address: "",
  location:"",
  gender:"",
  country:"",
  state:"",
  stateId:"",
  cityId:"",
  city:"",
  pinCode:"",
  martialStatus:"",
});
  const [gender, setGender] = useState("");
  const [stateId, setStateId] = useState("");
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [cityId, setCityId] = useState("");
  const [pincode, setpincode] = useState("");
  useEffect(() => {
    const fetching=async()=>{
      const {data} = await axios.get(`${BaseUrl}/get-states`)
      setState(data)
    }
    fetching();
    
  }, [])
  useEffect(() => {
    const cityfetching=async()=>{
      const {data} = await axios.get(`${BaseUrl}/get-citiesByStateId?stateId=${stateId}`)
      setCity(data)
    }
    cityfetching()
  }, [stateId])
  return (
    <React.Fragment>
        <Modal show={open} position="center" onClose={() => {setOpen(false)}}>
        <form>
          <Modal.Header className=''>Register now</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 p-6">
                <div className="grid grid-cols-2 gap-4 ">
                    <select
                    id="underline_select"
                    className=" py-2.5  w-auto text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                    >   
                        <option selected>Title</option>
                        {title.map((values)=>(<option value={values} >{values}</option>))}
                    </select>    
                <input
                  id="email1"
                  className="mt-4 border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                  type="text"
                  placeholder="FirstName"
                />
                <input
                  id="email1"
                  className="mt-4 border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                  type="text"
                  placeholder="Lastname"
                />
                <select
                    id="underline_select"
                    className=" py-2.5  w-auto text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                    >   
                        <option selected>Gender</option>
                        {genderValue.map((values)=>(<option value={values} >{values}</option>))}
                    </select>    
                <input
                  id="email1"
                  type="text"
                  className="mt-4 border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                  disabled
                  value={location}
                />
                <input
                id='email2'
                type="text"
                className="mt-4 border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                placeholder='Address line 1'
                />
                <input
                id='email2'
                type="text"
                className="mt-4 border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                placeholder='Address line 2'
                />
                <DatePicker  className="mt-4 w-full border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer" 
                 placeholderText='Date of birth' required={true} />
                <select
              id="underline_select"
              className=" py-2.5  w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
            >
              <option selected>India</option>
            </select>
            <select
              id="underline_select"
              className=" py-2.5  w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
              onChange={(e) => {
                setStateId(e.target.value);
              }}
            >
              {state.map (({id,name})=>(<option id={id} value={id} >{name}</option>))}
            </select>
            <select
              id="underline_select"
              className=" py-2.5  w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
              onChange={(e) => {
                setCityId(e.target.value)
              }}
            >
              {city.map (({id,name})=>(<option id={id} value={id} >{name}</option>))}
            </select>
            <label>
                <input
                  type="text"
                  className="mt-4 border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                  placeholder='*pincode'
                  name="pincode"
                />
              </label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-between">
            <Button color="gray" onClick={() => {setOpen(false)}}>
              Decline
            </Button>
            <Button
              type="submit"
              className="px-2 "
              gradientDuoTone="cyanToBlue"
              onClick={()=>{setDone(true);setOpen(false)}}
            >
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </React.Fragment>
  )
}

export default RegistarModal