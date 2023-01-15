import React, { useState } from "react";
import DesktopSidebar from "../../Common/DesktopSidebar";
import MobileSidebar from "../../Common/MobileSidebar";
import SearchBar from "../../Common/SearchBar";
import Table from "../../Common/Table";
import { NavLink, Outlet } from "react-router-dom";
import { Button, Modal } from "flowbite-react";
import PrimaryButton from "../../Common/PrimaryButton";
import { isEmpty } from "lodash";
import { AiFillEye ,AiOutlineDownload} from 'react-icons/ai';
const heading = ['No','Date','Time','Action',]
const data = [
  {id:1, Date:'11/02/2023', time:'4:00pm',link:'ddddddddd'},
  {id:2, Date:'15/02/2023', time:'9:00am',link:'ddddddddd'},
  {id:3, Date:'17/02/2023', time:'5:00pm',link:'ddddddddd'},
  {id:4, Date:'18/02/2023', time:'12:00pm',link:'ddddddddd'},
  
]
const DashboardView = () => {
  const [page,setPage] = useState(1)
   const [openSideBar, setOpenSidebar] = useState(false);
 
  return (
    <>
      <div className="w-full bg-green-100/50 h-screen">
        <>
          <div className="flex flex-no-wrap">
            {/* Sidebar starts  */}

            <DesktopSidebar />

            {/* mobile sidebar replace below */}

            <MobileSidebar
              setOpenSidebar={setOpenSidebar}
              openSideBar={openSideBar}
            />
            {/* mobile sidebar replace up */}

            {/* <!-- Sidebar ends -->
                    <!--main Container Start below--> */}
            <div className="container   mx-auto py-10 h-64 lg:w-4/5  px-6">
              <div className="w-full h-full rounded   border-gray-300">
                {/* <Table>
                          <SearchBar/>
                         </Table> */}
                <Outlet></Outlet>
               
              </div>
            </div>
            {/* main Container Start up */}
          </div>
        </>
      </div>
    </>
  );
};

export default DashboardView;
