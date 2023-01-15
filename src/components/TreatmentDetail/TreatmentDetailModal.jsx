import { Button, Modal } from "flowbite-react";
import React from "react";
import PrimaryButton from "../../Common/PrimaryButton";
import LabTest from "../LabTest";
import Prescription from "../Prescription";

const TreatmentDetailModal = ({ open, setOpen, selectedPatient }) => {
  const {date,time,doctor,patient} = selectedPatient ||{};
  return (
    <>
      <React.Fragment>
        <Modal
          className="   overflow-y-auto"
          show={open}
          position="center"
          size="7xl"
          onClose={() => {
            setOpen(false);
          }}
        >
          <Modal.Header className="!py-2 text-gray-700 !px-3 uppercase">
             Treatment Detail
                       </Modal.Header>
          <form>
            <Modal.Body className="overflow-y-auto bg-green-100/50 h-[83vh] ">
              <div className="patient-details-and-appointment-details flex items-center justify-between">
                {/* <div className="flex items-center gap-2">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            class="rounded-full w-24"
                            alt="Avatar"
                          />
                          <div className="font-[500]">
                            <h3 className="text-xl font-semibold">
                              MD.READUL ISLAM
                            </h3>
                            <p className="">
                              <span>Male</span> | <span>Single</span>
                            </p>
                            <p>
                              <span>16/01/2023</span> | <span>07:45 am</span>
                            </p>
                            <p>Reason for your visit Menopause</p>
                          </div>
                        </div> */}
                <div className="flex items-center gap-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    class="rounded-full w-24"
                    alt="Avatar"
                  />
                  <div className="font-[500]">
                    <h3 className="text-xl font-semibold">{patient?.firstName + ' ' + patient?.lastName}</h3>
                    <p className="">
                      <span>{patient?.gender}</span> | <span>{patient?.martialStatus}</span>
                    </p>
                    <p>
                      <span>{date}</span> | <span>{time}</span>
                    </p>
                    <p>Reason for your visit Menopause</p>
                  </div>
                </div>
              </div>
              {/* 2 */}

              <Prescription selectedPatient={selectedPatient} />

              <LabTest selectedPatient={selectedPatient} />
            </Modal.Body>
            <Modal.Footer className="flex !py-2 !px-3 !mb-4  w-full !justify-end">
              {/* <Button
                className="px-2 !focus:outline-none focus:ring-offset-0 "
                color="gray"
                // onClick={() => {
                //   setOpen(false);
                //   handleOtpSubmit();
                // }}
              >
                Cancel
              </Button> */}
              {/* <Button
             onClick={handleSubmit}
              className="px-2 "
              gradientDuoTone="cyanToBlue"
              onClick={() => {
                setOpen(false);
                handleOtpSubmit();
              }}
            >
              Save
            </Button> */}

              <PrimaryButton  handleSubmit={()=>{setOpen(false)}} type="button">save</PrimaryButton>
            </Modal.Footer>
          </form>
        </Modal>
      </React.Fragment>
    </>
  );
};

export default TreatmentDetailModal;
