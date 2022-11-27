import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import auth from "../Utils/firebase.init";
const useFirebaseAuth = ()=>{

    const setupRecaptcha = (number)=>{
      const   recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
      recaptchaVerifier.render();
      return signInWithPhoneNumber(auth, number, recaptchaVerifier)
    }

    return{
        setupRecaptcha
    }

}

export default  useFirebaseAuth