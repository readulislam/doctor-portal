import { Button, Card } from "flowbite-react";
import React, { useState } from "react";
import ModalView from "../Modal/ModalView";

const CardView = () => {
  const [open, setOpen] = useState(false);

  const data = [

    
    
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQeM37N_ZG5L9ANpnuE45M5Lf96DfjjMRlKbPLhs6dZXkuKYB3NUVZSycRwmGGpWijh4&usqp=CAU",
    },
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQeM37N_ZG5L9ANpnuE45M5Lf96DfjjMRlKbPLhs6dZXkuKYB3NUVZSycRwmGGpWijh4&usqp=CAU",
    },
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQeM37N_ZG5L9ANpnuE45M5Lf96DfjjMRlKbPLhs6dZXkuKYB3NUVZSycRwmGGpWijh4&usqp=CAU",
    },
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQeM37N_ZG5L9ANpnuE45M5Lf96DfjjMRlKbPLhs6dZXkuKYB3NUVZSycRwmGGpWijh4&usqp=CAU",
    },
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQeM37N_ZG5L9ANpnuE45M5Lf96DfjjMRlKbPLhs6dZXkuKYB3NUVZSycRwmGGpWijh4&usqp=CAU",
    },
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQeM37N_ZG5L9ANpnuE45M5Lf96DfjjMRlKbPLhs6dZXkuKYB3NUVZSycRwmGGpWijh4&usqp=CAU",
    },
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQeM37N_ZG5L9ANpnuE45M5Lf96DfjjMRlKbPLhs6dZXkuKYB3NUVZSycRwmGGpWijh4&usqp=CAU",
    },
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQeM37N_ZG5L9ANpnuE45M5Lf96DfjjMRlKbPLhs6dZXkuKYB3NUVZSycRwmGGpWijh4&usqp=CAU",
    },
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQeM37N_ZG5L9ANpnuE45M5Lf96DfjjMRlKbPLhs6dZXkuKYB3NUVZSycRwmGGpWijh4&usqp=CAU",
    },
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQeM37N_ZG5L9ANpnuE45M5Lf96DfjjMRlKbPLhs6dZXkuKYB3NUVZSycRwmGGpWijh4&usqp=CAU",
    },
    
  ];
  return (
    <>
      <div className="grid grid-cols-4 gap-y-10 mx-10 my-16">
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
    </>
  );
};

export default CardView;
