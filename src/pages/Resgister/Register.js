import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  ListCities, PatientRegister
} from "../../APi/api";
import OtpVerifyModal from "../../Common/OtpVerifyModal";
import useCommonApi from "../../hooks/useCommonApi";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { authActions } from "../../Store/Auth-Slice";
import RegisterView from "./RegisterView";

const Register = () => {
  const [patientInfo, setPatientInfo] = useState({});
 
  const [number, setNumber] = useState(null);
  const [stateId, setStateId] = useState(null);

  const [openOtp, setOpenOtp] = useState(false);
  const [OTPresult, setOTPResult] = useState("");
  const { setupRecaptcha } = useFirebaseAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {hospitals,states,cities} = useCommonApi({stateId})
  
  
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
