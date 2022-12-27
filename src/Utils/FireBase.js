import { initializeApp } from 'firebase/app';
import { getStorage } from '@firebase/storage';
  
const firebaseConfig = {
    apiKey: "AIzaSyBEgxrFy-mLa_QS0QCx4-RJbVp4IYZeXxY",
  authDomain: "verify-63923.firebaseapp.com",
  projectId: "verify-63923",
  storageBucket: "verify-63923.appspot.com",
  messagingSenderId: "407440403580",
  appId: "1:407440403580:web:15293589cf9ad40369edf9"
};
  
const app = initializeApp(firebaseConfig);
  
const storage = getStorage();
  
export default storage;