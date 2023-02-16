import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import {
  MdModelTraining, MdOutlineDarkMode, MdOutlineLightMode
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TbBrandBooking } from "react-icons/tb";
import { SiManageiq } from "react-icons/si";
import { useNavigate } from "react-router";
import { Link,NavLink } from "react-router-dom";
import ManageAvailabilities from "../components/ManageAvailabilities";
const doctorManu = [
  { id: 1, menu: "Dashboard", icon: <RxDashboard size={20} /> },
  { id: 1, menu: "Appointment", icon: <TbBrandBooking size={22} /> },
  { id: 3, menu: "AvailAbility", icon: <SiManageiq size={20} /> },
  { id: 1, menu: "Profile", icon: <CgProfile size={20} /> },
];
const adminMenu=[
  { id:1,menu:"Dashboard" ,icon:<RxDashboard size={20}/> },
  { id:2,menu:"Doctor" ,icon:<CgProfile size={20}/> },
  { id:3,menu:"patient" ,icon:<CgProfile size={20}/> },
];
const DashboardMenu = () => {
  const navigate = useNavigate()
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [nestedMenu, setNestedMenu] = useState(false);
  let theme = localStorage.getItem("medical") || "light";
  theme === "light" ? setLightTheme() : setDarkTheme();
  function setDarkTheme() {
    document.body.classList.add("dark");

    localStorage.setItem("medical", "dark");
    theme = "dark";
  }
  function setLightTheme() {
    document.body.classList.remove("dark");

    localStorage.setItem("medical", "light");
    theme = "light";
  }
  const handleMode = () => {
    if (theme === "light") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };
 
const menuHandler =(menu)=>{
if(menu==='Dashboard')  return navigate('/dashboard');

}
  return (
    <ul className="mt-12 uppercase">
      {/* {adminMenu.map(({id,menu,icon})=>(
        <>
          <li 
              onClick={()=>menuHandler(menu)}
              className="flex hover:bg-gray-100/50 py-2 w-full justify-between text-gray-700 cursor-pointer items-center mb-4 rounded-md pl-3">
                <p className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  <span> {icon}</span>
                  <span className="text-sm ml-2">{menu}</span>
                </p>
              </li>
        </>
      ))} */}
      {doctorManu.map(({ id, menu, icon }) => (
        <>
          {menu === "Appointment" ? (
            <li className="mb-4 uppercase">
              <button
                onClick={() => setNestedMenu(!nestedMenu)}
                type="button"
                className="flex uppercase  items-center w-full py-2 pl-3 text-base font-normal text-gray-700 transition duration-75 rounded-lg group hover:bg-gray-100/50 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span> {icon}</span>
                <span className="text-sm ml-2 pr-1">{menu}</span>
                <svg
                  sidebar-toggle-item
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`${nestedMenu ? "block " : "hidden"}  `}
              >
                {/* ({ isActive }) =>
              isActive ? activeClassName : undefined */}
                <NavLink to='upcoming'>
                {({ isActive }) => (
                  <p class={` ${isActive&&'!bg-gray-100/50'}  cursor-pointer py-2 text-sm text-gray-700 transition-all duration-75 rounded-md group hover:bg-gray-100/50 dark:text-white dark:hover:bg-gray-700 mb-2 mt-2 ml-3 pl-7`}>
                    Upcoming
                  </p>
                  )}
                </NavLink>
                <NavLink  to='previous' >
                {({ isActive }) => (
                  <p class={` ${isActive&&'!bg-gray-100/50'}  cursor-pointer py-2  text-sm text-gray-700 transition-all duration-75 rounded-md group hover:bg-gray-100/50 dark:text-white dark:hover:bg-gray-700 ml-3 pl-7`}>
                    Previous
                  </p>
                  )}
                </NavLink>
              </ul>
            </li>
          ) : (
            <>
              
                 
              {menu ==='AvailAbility' ?
                
                
                 <NavLink to='AvailAbility'>
                {({ isActive }) => (
                  <p class={` ${isActive&&'!bg-gray-100/50'} mb-4 flex hover:bg-gray-100/50 py-2 w-full  text-gray-700 cursor-pointer items-center mb-4 rounded-md pl-3 `}>
                      <span> {icon}</span>
                      <span className="text-sm ml-2">{menu}</span>
                  </p>
                  )}
                </NavLink>:   <li 
              onClick={()=>menuHandler(menu)}
              className="flex hover:bg-gray-100/50 py-2 w-full justify-between text-gray-700 cursor-pointer items-center mb-4 rounded-md pl-3">
                <p className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                  <span> {icon}</span>
             
                  <span className="text-sm ml-2">{menu}</span>
                </p>
                {/* <div className="py-1 px-3 bg-gray-600 rounded text-white flex items-center justify-center text-xs">5</div> */}
              </li>}
              
            
         
            </>
          )}
        </>
      ))}

      <li
        onClick={() => {setIsDarkMode(!isDarkMode);handleMode()}}
        className="flex pl-3 w-full rounded-md py-2 hover:bg-gray-100/50 justify-between text-gray-700 cursor-pointer items-center mb-6"
      >
        <p
        
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
        >
          {isDarkMode ? (
            <>
              <span>
                {" "}
                <MdOutlineLightMode size={20} />
              </span>
              <span className="text-sm ml-2">Light</span>
            </>
          ) : (
            <>
              <span>
                {" "}
                <MdOutlineDarkMode size={20} />
              </span>
              <span className="text-sm ml-2">Dark</span>
            </>
          )}
        </p>
      </li>
    </ul>
  );
};

export default DashboardMenu;
