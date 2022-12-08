import { Button, Card, Pagination } from "flowbite-react";
import React, { useState } from "react";
import { data } from "../../Utils/mockData";
import Filtering from "../Filtering/Filtering";
import AppointmentRegistar from "../Form/AppoinmentRegistar/AppointmentRegistar";
import ModalView from "../Modal/ModalView";

const CardView = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(1);
  const [page, setPage] = useState(1);
  const [modalName, setModalName] = useState("");
  const [modalSpeciality, setModalSpeciality] = useState("");
  const [modalLocation, setModalLocation] = useState("");
  const [location, setLocation] = useState("");
  const [speciality, setSpeciality] = useState("");

 
  return (
    <>
    <Filtering/>
      <div className="grid grid-cols-4 gap-y-10 gap-4  mt-16 place-items-center">
        {data.map((d) => (
          <div className="max-w-sm ">
            <Card 
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              
              imgSrc={d.image}
            >
              <h5 className="text-xl font-bold    text-gray-900 dark:text-white">
                {d.name}
              </h5>
              <p className="font-normal text-xs text-gray-500 dark:text-gray-400">
                {d.designation}
              </p>
              <p className="  text-gray-600 text-xs p-0 -mt-2 font-bold dark:text-gray-400">
                {d.location}
              </p>
              <hr/>
              <p className="font-normal text-gray-500 text-xs dark:text-gray-400">
                {d.speciality}
              </p>
              <div>
                <Button
                  onClick={() => {setOpen(true);setModalName(d.name);setId();setModalLocation(d.location);setModalSpeciality(d.speciality)}}
                  className="w-full rounded-full"
                  gradientDuoTone="cyanToBlue"
                >
                  Book an Appointment
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <AppointmentRegistar open={open} id={id} setOpen={setOpen} name={modalName} speciality={modalSpeciality} location={modalLocation} />
     <div className="w-full flex justify-center mt-6 mb-32">
     <Pagination
      currentPage={page}
      
      onPageChange={(e)=> setPage(e)}
      showIcons={true}
      totalPages={100}
    />
     </div>
    </>
  );
};

export default CardView;
