
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Form/Login/";
import Register from "./pages/Resgister";
import ToasterContainer from "./Utils/ToasterContainer";
import UpcomingAppointment from "./components/UpcomingAppointment";
import PreviousAppointment from "./components/PreviousAppointment";
import DoctorView from "./components/DoctorView/DoctorView";
import Navbar from "./Navbar";
import Header from "./components/Header/Header";
import Filtering from "./components/Filtering/Filtering";
import CardView from "./components/CardView/CardView";


const App = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    {/* <Filtering/> */}
    <CardView/>
    
      {/* <Register/> */}

      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/admin" element={<AddDoctor />} /> */}
        {/* 
        
        <Route path="/patientView" element={<PatientView />} /> */}
{/* <Route path="/doctorView" element={<DoctorView/>} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<UpcomingAppointment />} />
          <Route path="upcoming" element={<UpcomingAppointment />} />
          <Route path="previous" element={<PreviousAppointment />} />
        </Route>
      </Routes> */}
      {/* <ToasterContainer /> */}

    </>
  );
};

export default App;
