import React from 'react'
import { useSelector } from 'react-redux';
import CardView from '../CardView/CardView';
import DoctorView from '../DoctorView/DoctorView';
import Header from '../Header/Header';
import Menu from '../Navbar/Menu';


const Dashboard = () => {
  // const isLogged=useSelector(state=>state.login.isLogged)
  return (
    <>
    {/* {!isLogged && <>
      <Menu/>
   <Header/>
   <CardView/>
    </>}
    {isLogged && <DoctorView/>}
    */}
    <Menu/>
   <Header/>
   <CardView/>
   </> 
  )
}

export default Dashboard