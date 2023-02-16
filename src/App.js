import { Route, Routes } from "react-router";

import PreviousAppointment from "./components/PreviousAppointment";
import UpcomingAppointment from "./components/UpcomingAppointment";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Resgister";
import ToasterContainer from "./Utils/ToasterContainer";
import HomePage from "./pages/Home/HomePage";
import ManageAvailabilities from "./components/ManageAvailabilities";



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
          <Route path="availability" element={<ManageAvailabilities />} />
        </Route>
      </Routes>
      <ToasterContainer />
    </>
  );
};

export default App;
