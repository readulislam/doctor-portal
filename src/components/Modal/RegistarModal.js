import { Button, Modal, TextInput } from "flowbite-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useState } from "react";
import { genderValue, martial, title } from "../../Utils/mockData";
import axios from "axios";
import { BaseUrl, ListHospitals } from "../../APi/api";
import { input } from "formik";

const RegistarModal = ({
  setDone,
  open,
  setOpen,
  number,
  handleRegisterModel,
}) => {
  const [personTitle, setPersonTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState();
  const [stateId, setStateId] = useState("");
  const [cityId, setCityId] = useState("");
  const [state, setState] = useState([]);
  const [gender, setGender] = useState("");
  const [city, setCity] = useState([]);
  const [date, setDate] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [martialStatus, setMartialStatus] = useState("");
  const [hospitalList, setHospitalList] = useState([]);
  const splitting = date.split("-");
  const userDate = splitting[2] + "/" + splitting[1] + "/" + splitting[0];
  useEffect(() => {
    const fetching = async () => {
      const { data } = await ListHospitals();
      setHospitalList(data);
    };
    fetching();
  }, []);
  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`${BaseUrl}/get-states`);
      setState(data);
    };
    fetching();
  }, []);
  useEffect(() => {
    const cityFetching = async () => {
      const { data } = await axios.get(
        `${BaseUrl}/get-citiesByStateId?stateId=${stateId}`
      );
      setCity(data);
    };
    cityFetching();
  }, [stateId]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const apiData = {
      title: personTitle,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      contact: number,
      dateOfBirth: userDate,
      address: address,
      location: hospitalName,
      gender: gender,
      country: "india",
      state: "",
      stateId: stateId,
      cityId: cityId,
      city: "",
      pinCode: pincode,
      martialStatus: martialStatus,
    };
    handleRegisterModel(apiData);
  };
  return (
    <React.Fragment>
      <Modal
        show={open}
        position="center"
        onClose={() => {
          setOpen(false);
        }}
      >
        <form>
          <Modal.Header className="">Register now</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 p-6">
              <div className="grid grid-cols-2 gap-4 ">
                <select
                  id="underline_select"
                  className=" mt-5 w-full text-gray-500 grid-cols-1 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                  onChange={(e) => {
                    setPersonTitle(e.target.value);
                  }}
                >
                  <option selected>Title</option>
                  {title.map((values) => (
                    <option value={values}>{values}</option>
                  ))}
                </select>
                <label>
                  <input
                    type="text"
                    className="mt-4  border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                    placeholder="ENTER_YOUR_NAME"
                    name="firstName"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    className="mt-4  border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                    placeholder="middleName"
                    name="middleName"
                    onChange={(e) => {
                      setMiddleName(e.target.value);
                    }}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    className="mt-4  border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                    placeholder="lastName"
                    name="lastName"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </label>
                <TextInput
                  id="email1"
                  className="mt-4 w-full border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                  type="date"
                  required={true}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
                <label>
                  <input
                    type="text"
                    className="mt-4 w-full border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                    placeholder="*address"
                    name="address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </label>
                <select
                  id="underline_select"
                  className=" py-2.5 mt-4 w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option selected>Gender</option>
                  {genderValue.map((values) => (
                    <option value={values}>{values}</option>
                  ))}
                </select>
                <select
                  id="underline_select"
                  className=" py-2.5 mt-4 w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                  onChange={(e) => {
                    setHospitalName(e.target.value);
                  }}
                >
                  <option selected>Location</option>
                  {hospitalList.map(({ id, name, address }) => {
                    return (
                      <option value={id}>
                        {name} , {address}
                      </option>
                    );
                  })}
                </select>
                <select
                  id="underline_select"
                  className=" py-2.5 mt-4 w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                >
                  <option selected>India</option>
                </select>
                <select
                  id="underline_select"
                  className=" py-2.5 mt-4 w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                  onChange={(e) => {
                    setStateId(e.target.value);
                  }}
                >
                  <option selected> State</option>
                  {state.map(({ id, name }) => (
                    <option id={id} value={id}>
                      {name}
                    </option>
                  ))}
                </select>
                <select
                  id="underline_select"
                  className=" py-2.5  mt-4 w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                  onChange={(e) => {
                    setCityId(e.target.value);
                  }}
                >
                  <option selected>City</option>
                  {city.map(({ id, name }) => (
                    <option id={id} value={id}>
                      {name}
                    </option>
                  ))}
                </select>
                <label>
                  <input
                    type="text"
                    className="mt-4 w-full border-b-2 border-0 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                    placeholder="*pincode"
                    name="pincode"
                    onChange={(e) => {
                      setPincode(e.target.value);
                    }}
                  />
                </label>
                <select
                  id="underline_select"
                  className=" py-2.5 mt-4 w-full text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
                  onChange={(e) => {
                    setMartialStatus(e.target.value);
                  }}
                >
                  <option selected>Select Martial Status</option>
                  {martial.map((values) => (
                    <option value={values}>{values}</option>
                  ))}
                </select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-between">
            <Button
              color="gray"
              onClick={() => {
                setOpen(false);
              }}
            >
              Decline
            </Button>
            <Button
              type="submit"
              className="px-2 "
              gradientDuoTone="cyanToBlue"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default RegistarModal;
