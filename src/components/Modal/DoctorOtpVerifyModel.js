import { Button, Modal } from "flowbite-react";
import OTPInput from "otp-input-react";
import React, { useState } from "react";
const DoctorOtpVerifyModel = ({
  open,
  setOpen,
  handleOtpSubmit,
  handleDispatch,
  OTPresult,
  number,
}) => {
  const [otp, setOtp] = useState("");

  const otpHandler = (Otp) => {
    setOtp(Otp);
    console.log(otp);
  };
  const handleSubmit = async () => {
    if (!otp && otp === undefined) return;
    try {
      const verify = await OTPresult.confirm(otp);

      // const { idToken, isNewUser } = verify.UserCredentialImpl._tokenResponse;
      // console.log(idToken, isNewUser);
      // if (!idToken) {
      //   alert("something went wrong");
      //   return;
      // }
      // if (idToken && !isNewUser) {
      //   alert("number already in exits. please login with number");
      //   return;
      // }
      if (!verify) {
        return;
      }
      handleDispatch()
      console.log("done");
    } catch (error) {
      alert("OTP Invalid");
      console.log(error);
    }
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
        <form onSubmit={handleSubmit}>
          <Modal.Header className="">Verify Otp</Modal.Header>
          <h4 className="w-64 text-center mx-auto">
            We will send you a one time OTP on you phone number
            <br />{" "}
            <span className="font-bold">
              {" "}
              ({`${number?.slice(0, 3)}  ${number?.slice(3)} `})
            </span>
          </h4>
          <Modal.Body>
            <div className="text-black flex flex-col items-center justify-center ">
              <span className="font-semibold mb-5">
                <OTPInput
                  inputStyles={{
                    width: "50px",
                    height: "50px",
                    fontSize: "22px",
                    borderColor: "#a4dded",
                  }}
                  secure={false}
                  value={otp}
                  onChange={otpHandler}
                  autoFocus
                  OTPLength={6}
                  otpType="number"
                />
              </span>
              <span className=" underline font-semibold text-orange-500 underline-offset-4 cursor-pointer text-lg">
                Resend
              </span>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-between">
            <Button
              className="px-2 "
              color="gray"
              onClick={() => {
                setOpen(false);
                handleOtpSubmit();
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="px-2 "
              gradientDuoTone="cyanToBlue"
              // onClick={() => {
              //   setOpen(false);
              //   handleOtpSubmit();
              // }}
            >
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default DoctorOtpVerifyModel;
