import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  ListCities,
  ListHospitals,
  ListStates,
  PatientRegister
} from "../../APi/api";
import OtpVerifyModal from "../../Common/OtpVerifyModal";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { authActions } from "../../Store/Auth-Slice";
import RegisterView from "./RegisterView";

const Register = () => {
  const [patientInfo, setPatientInfo] = useState({});
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [number, setNumber] = useState(null);
  const [stateId, setStateId] = useState(null);
  const [hospitals, setHospitals] = useState(null);
  const [openOtp, setOpenOtp] = useState(false);
  const [OTPresult, setOTPResult] = useState("");
  const { setupRecaptcha } = useFirebaseAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const data = await ListStates();
      setStates(data);

      const hospitalList = await ListHospitals();
      setHospitals(hospitalList.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
    
      if (stateId) {
        const cities = await ListCities(stateId);
        setCities(cities);
      }
    };
    fetchData();
  }, [stateId]);
  const handleFormSubmit = async (values) => {
    setPatientInfo({
      ...values,
      contact: number,
      city: "",
      state: "",
      middleName: "",
    });

    if (values && number) {
      const response = await setupRecaptcha(number,'registration');
      setOTPResult(response);
      if(response){
      setOpenOtp(true)
      }
      }
  };
  const handleDispatch = async () => {
    const data = await PatientRegister(patientInfo);
    console.log(data);
    if (data) {
      dispatch(authActions.userRegister({ userId: data.id, userInfo: data }));
      toast.success('Registration successful',{id:1})
      navigate("/dashboard");
    }
  };
  const props = {
    cities,
    setStateId,
    number,
    setNumber,
    handleFormSubmit,
    states,
    hospitals,
  };

  
  const handleOtpSubmit = () => {};
  return (
    <>
      <RegisterView props={props} />
      <OtpVerifyModal
        OTPresult={OTPresult}
        handleDispatch={handleDispatch}
        open={openOtp}
        number={number}
        setOpen={setOpenOtp}
        handleOtpSubmit={handleOtpSubmit}
        setOTPResult={setOTPResult}
      />
    </>
  );
};

export default Register;
