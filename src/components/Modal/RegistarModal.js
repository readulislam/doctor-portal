import { Button, Modal, TextInput } from 'flowbite-react'
import React from 'react'

const RegistarModal = ({setDone, open ,setOpen,location}) => {
  return (
    <React.Fragment>
        <Modal show={open} position="center" onClose={() => {setOpen(false)}}>
        <form>
          <Modal.Header>Book An Appointment</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 p-6">
                <div className="grid grid-cols-2 gap-4 ">
                    <select
                    id="underline_select"
                    className=" py-2.5  w-auto text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                    >   
                        <option selected>Title</option>
                        <option value="B">Baby</option>
                        <option value="Bo">Baby Of</option>
                        <option value="Mr">Mr.</option>
                        <option value="Mrs">Mrs.</option>
                    </select>    
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="FirstName"
                />
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="Lastname"
                />
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="Email"
                />
                <select
                    id="underline_select"
                    className=" py-2.5  w-auto text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                    >   
                        <option selected>Gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="O">other.</option>
                    </select>    
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="name@flowbite.com"
                  disabled
                  value={location}
                />
                <TextInput
                id='email'
                type="text"
                placeholder='Address line 1'
                />
                <TextInput
                id='email'
                type="text"
                placeholder='Address line 2'
                />
                <TextInput id="email1" type="date" required={true} />
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