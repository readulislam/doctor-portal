import { useSelector } from 'react-redux';
import Auth from './components/Auth/Auth';



const  App=()=> {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  return (
   <>
    <Auth/>
   {/* {isLoggedIn && <Dashboard/> } */}
   </>
  );
}

export default App;
