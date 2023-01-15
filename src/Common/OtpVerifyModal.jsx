import { Button, Modal } from "flowbite-react";
import OTPInput from "otp-input-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import PrimaryButton from "./PrimaryButton";
import './styles.css'
const OtpVerifyModal = ({
  open,
  setOpen,
  handleOtpSubmit,
  handleDispatch,
  OTPresult,
  number,
  setOTPResult
}) => {
    const [resend,setResend] = useState(false)
   const [otp, setOtp] = useState("");
   const [sendingTime,setSendingTime] = (useState(60));
   const { setupRecaptcha } = useFirebaseAuth();

  const otpHandler = (Otp) => {
    setOtp(Otp);
  };


  const resendHandler = async()=>{
  
    setResend(true)
    
    // if (number && resend) {
    //   console.log(true);
    //   const response = await setupRecaptcha(number,'resend_otp');
    //   console.log(response)
    //   setOTPResult(response);
    //   if(response){
    //  toast.success('response sending')
    //   }
    //   }  
                
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp && otp === undefined) return;
    try {
      const verify = await OTPresult.confirm(otp);
      console.log(verify);

      // const { idToken, isNewUser } = verify.UserCredentialImpl._tokenResponse;
      // if (!idToken) {
      //   alert("something went wrong");
      //   return;
      // }
      // if (idToken && !isNewUser) {
      //   alert("number already in exits. please login with number");
      //   return;
      // }
      setOpen(false)
      if (!verify) {
        return;
      }
      handleDispatch();
      console.log('handleDispatch done')
    } catch (error) {
      toast.error('something went wrong',{id:1})
    }
  };
 useEffect(()=>{
    if(resend){
        setTimeout(
            () => setResend(false),
            60000
          )

          let timerId;
          if (resend) {
            timerId = setInterval(() => {
              setSendingTime((prev) => prev - 1);
            }, 1000);
           
          }
      
          return function cleanup() {
            clearInterval(timerId);
          };
    }
   
 },[resend,sendingTime])
 /*  const timing= setInterval(()=>setSendingTime(state=> state-1),1000)
    if(sendingTime===0){
        // clearInterval(timing);
    } */

// useEffect(()=>{
 
// },[])


  return (
    <React.Fragment>
      <Modal
      
        show={open}
        position="center"
       
        onClose={() => {
          setOpen(false);
        }}
      >
        <form className="bg-green-100/50 " onSubmit={handleSubmit}>
          <Modal.Header className="!py-4 text-gray-500 uppercase font-bold">Verify Otp</Modal.Header>
          <h4 className="w-64 pt-2 text-center text-gray-500 text-sm  mx-auto">
            We will send you a one time OTP on you phone number
            <br />{" "}
            <span className="font-semibold  text-[#499AFA]">
              {" "}
              {`${number?.slice(0, 3)}  ${number?.slice(3)} `}
             
            </span>
          </h4>
          <Modal.Body>
            <div className="text-black flex flex-col items-center justify-center ">
              <span className=" ">
                <OTPInput  className='otpInput '
                  inputStyles={{
                  
                    fontSize: "16px",
                    borderColor: 'rgb(55 65 81)',
                    border:'1px solid rgba(73, 154, 250, 0.4)',
                    backgroundColor: 'white',
                    borderRadius:'4px',
                    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 3px -1px rgb(0 0 0 / 0.1)',
                    
                    
                  }}
                  secure={false}
                  value={otp}
                  onChange={otpHandler}
                  autoFocus
                  OTPLength={6}
                  otpType="number"
                />
              </span>
              {/* <span className=" underline font-semibold text-orange-500 underline-offset-4 cursor-pointer text-lg">
                Resend
              </span> */}
               <div className="w-full flex justify-center pr-4 pt-3" id="resend_otp"/>
            </div>

           
          </Modal.Body>
          <Modal.Footer className="flex !py-4 rounded-none justify-between">

           
           <span className="flex items-center"> <Button
              className="px-2  "
              color="gray"
              disabled={resend}
              onClick={resendHandler}
            >
           {  resend? 'sended':'resend'}
            </Button>
            
            
           {resend&& <span className=" text-sm">{sendingTime}s</span>}
            </span>
            <PrimaryButton handleSubmit={handleSubmit} type={'submit'}>
              Submit
            </PrimaryButton>

           
          </Modal.Footer>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default OtpVerifyModal;
