import { Button, Card, Pagination } from "flowbite-react";
import React, { useState } from "react";
import { data } from "../../Utils/mockData";
import Filtering from "../Filtering/Filtering";
import ModalView from "../Modal/ModalView";

const CardView = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);

 
  return (
    <>
    <Filtering/>
      <div className="grid grid-cols-4 gap-y-10 gap-4  mt-16 place-items-center">
        {data.map((d) => (
          <div className="max-w-xs ">
            <Card 
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={d.image}
            >
              <h5 className="text-xl font-bold    text-gray-900 dark:text-white">
                Abishek Yaduv
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions
              </p>
              <div>
                <Button
                  onClick={() => setOpen(true)}
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
      <ModalView open={open} setOpen={setOpen} />
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
