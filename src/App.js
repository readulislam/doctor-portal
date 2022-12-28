import { Navigate, Route, Routes } from 'react-router';
import AddDoctor from './components/Admin/AddDoctor/AddDoctor';
import Dashboard from './components/Dashboard/Dashboard';
import DoctorView from './components/DoctorView/DoctorView';
import Login from './components/Form/Login';
import Registar from './components/Form/Registar';
import PatientView from './components/PatientView/PatientView';
import ToasterContainer from './Utils/ToasterContainer';



const  App=()=> {
  // const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
      <Route path="/login" element={<Login />} />
      <Route path='/admin' element={<AddDoctor/>}/>
      <Route path="/register" element={<Registar />} />
      <Route path="/doctorView" element={<DoctorView />} />
      <Route path='/patientView' element={<PatientView/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
<ToasterContainer/>
    </>
  );
}

export default App;
