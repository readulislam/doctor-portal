import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import auth from "../Utils/firebase.init";
const useFirebaseAuth = ()=>{

 

    const setupRecaptcha = (number, uniqueId)=>{
      const   recaptchaVerifier = new RecaptchaVerifier(uniqueId, {
        //'size': 'invisible',
      }, auth);
      recaptchaVerifier.render();
       
     
      return signInWithPhoneNumber(auth, number, recaptchaVerifier)
    }

    return{
        setupRecaptcha
      
      
        
    }

}

export default  useFirebaseAuth