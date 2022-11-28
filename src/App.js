import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Form/Login';
import Registar from './components/Form/Registar';



const  App=()=> {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registar />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
