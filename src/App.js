import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import AddDoctor from './components/Admin/AddDoctor/AddDoctor';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import DoctorView from './components/DoctorView/DoctorView';
import Login from './components/Form/Login';
import Registar from './components/Form/Registar';



const  App=()=> {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
      <Route path="/login" element={<Login />} />
      <Route path='/AddDoctor' element={<AddDoctor/>}/>
      <Route path="/register" element={<Registar />} />
      <Route path="/doctorView" element={<DoctorView />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
