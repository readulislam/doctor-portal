import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import OtpVerifyModal from "../../Common/OtpVerifyModal";
import DoctorDetail from "../../components/Modal/DoctorDetail";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { patientLoginByPhone } from "../../Store/Auth-Slice";
import { getDoctor } from "../../Store/Doctor-Slice";
import LoginView from "./LoginView";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId, doctorId } = useSelector((state) => state.Auth);
  const [doctorNumber, setDoctorNumber] = useState(null);
  const [patientNumber, setPatientNumber] = useState(null);
  const [isPatient, setIsPatient] = useState(true);
  const [isDoctor, setIsDoctor] = useState(false);
  const [openOtp, setOpenOtp] = useState(false);
  // const dispatch=useDispatch();
  const [OTPresult, setOTPResult] = useState("");
  const { setupRecaptcha } = useFirebaseAuth();

  const handleDispatch = () => {
    navigate("/dashboard");
  };
  const patientFormSubmitHandler = (values, { resetForm }) => {
    console.log(patientNumber)
    if (patientNumber) {
      dispatch(patientLoginByPhone(patientNumber));
    } else {
      toast.error("Please enter number",{id:1});
    }
  };
  const doctorFormSubmitHandler = (values,{resetForm}) => {
    // console.log({...values,doctorNumber});
    // resetForm();
    if(doctorNumber) {
      dispatch(getDoctor(doctorNumber));
    }else {
      toast.error("Please enter number",{id:1});
    }
    
    
  };
  useEffect(() => {
    const verify = async () => {
      if (userId && patientNumber) {
        const response = await setupRecaptcha(patientNumber, "patientLogin");
        setOTPResult(response);
        if (response) {
          setOpenOtp(true);
        }
      } else if (doctorNumber && doctorId) {
        const response = await setupRecaptcha(doctorNumber, "doctorLogin");
        setOTPResult(response);
        if (response) {
          setOpenOtp(true);
        }
      } 
    };
    verify();
  }, [userId, patientNumber, setupRecaptcha, doctorId, doctorNumber]);
  const props = {
    setDoctorNumber,
    setPatientNumber,
    isPatient,
    setIsPatient,
    isDoctor,
    setIsDoctor,
    patientNumber,
    doctorNumber,
    patientFormSubmitHandler,
    doctorFormSubmitHandler
  };
  return (
    <>
      <LoginView props={props} />
      {(patientNumber&& openOtp)&&<OtpVerifyModal
        OTPresult={OTPresult}
        handleDispatch={handleDispatch}
        open={openOtp}
        number={patientNumber}
        setOpen={setOpenOtp}
      />}
      {(doctorNumber&& openOtp)&&<OtpVerifyModal
        OTPresult={OTPresult}
        handleDispatch={handleDispatch}
        open={openOtp}
        number={doctorNumber}
        setOpen={setOpenOtp}
      />}
    </>
  );
};

export default Login;
