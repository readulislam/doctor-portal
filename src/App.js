
import { Route, Routes } from "react-router";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Resgister";
import ToasterContainer from "./Utils/ToasterContainer";
import UpcomingAppointment from "./components/UpcomingAppointment";
import PreviousAppointment from "./components/PreviousAppointment";
import DoctorView from "./components/DoctorView/DoctorView";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Filtering from "./components/Filtering/Filtering";
import CardView from "./components/CardView/CardView";

import HomePage from "./pages/Home/HomePage";




const App = () => {
  return (
    <>

    


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/admin" element={<AddDoctor />} />
         */}
        
        {/* <Route path="/patientView" element={<PatientView />} />
<Route path="/doctorView" element={<DoctorView/>} /> */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<UpcomingAppointment />} />
          <Route path="upcoming" element={<UpcomingAppointment />} />
          <Route path="previous" element={<PreviousAppointment />} />
        </Route>
      </Routes>
      <ToasterContainer />

    </>
  );
};

export default App;
