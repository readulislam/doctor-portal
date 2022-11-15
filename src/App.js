import { useSelector } from 'react-redux'
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';



const  App=()=> {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  return (
   <>
   {!isLoggedIn && <Auth/>}
   {isLoggedIn && <Dashboard/> }
   </>
  );
}

export default App;
