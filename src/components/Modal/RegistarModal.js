import { Button, Modal, TextInput } from 'flowbite-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from 'react'
import { genderValue, title } from '../../Utils/mockData';

const RegistarModal = ({setDone, open ,setOpen,location}) => {
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
            >
                <option selected > State</option>
              <option value="AN">Andaman and Nicobar Islands</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CH">Chandigarh</option>
                <option value="CT">Chhattisgarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="LA">Ladakh</option>
                <option value="LD">Lakshadweep</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PY">Puducherry</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UT">Uttarakhand</option>
                <option value="WB">West Bengal</option>
            </select>
            <select
              id="underline_select"
              className=" py-2.5  w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
            >
              <option selected>City</option>
              <option value="Jai">jaipur</option>
              <option value="Del">Delhi</option>
              <option value="Guur">Gurugram</option>
              <option value="Ajm">Ajmer</option>
              <option value="Agr">Agra</option>
              <option value="Bho">Bhopal</option>
              <option value="Cha">Chandigarh</option>
              <option value="Rai">Raipur</option>
              <option value="Kol">Kolkata</option>
              <option value="Mum">Mumbai</option>
              <option value="Che">Chennai</option>
              <option value="Luc">Lucknow</option>
              <option value="Ahm">Ahmedabad</option>
              <option value="Ali">Aligarh</option>
            </select>
            <label>
                <input
                  type="number"
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