import { MdOutlineEditCalendar } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";

import { Button, Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PrimaryButton from "../../Common/PrimaryButton";
import DiseaseDetails from "../DiseaseDetails";
import LabTest from "../LabTest";
import Prescription from "../Prescription";
import PatientDiseasesList from "./PatientDiseasesList";

const TreatmentDetailModal = ({
  open,
  setOpen,
  selectedPatient,
  setReReload,
  reReload,
}) => {
  const {
    Auth: { userId },
    Doctor: { doctorId },
  } = useSelector((state) => state);
  const { date, time, doctor, patient } = selectedPatient || {};
  const [isDiseases, setIsDiseases] = useState(false);
  const [edit, setEdit] = useState(false);
  const [openDiseaseDetail, setOpenDiseaseDetail] = useState(false);
  const [selectedDiseaseAppointment, setSelectedDiseaseAppointment] = useState(
    {}
  );
  const [diseasesName, setDiseasesName] = useState("");
  console.log(doctor);
  useEffect(() => {
    setDiseasesName(selectedPatient.diseaseName);
  }, [selectedPatient.diseaseName]);
  return (
    <>
      <React.Fragment>
        <Modal
          className=" scroll-smooth  overflow-y-auto"
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
              {openDiseaseDetail ? (
                <>
                  <button onClick={() => setOpenDiseaseDetail(false)}>
                    Back
                  </button>
                  <DiseaseDetails
                    selectedDiseaseAppointment={selectedDiseaseAppointment}
                  />
                </>
              ) : (
                <>
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

                    {doctorId && (
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-4">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            class="rounded-full w-24"
                            alt="Avatar"
                          />
                          <div className="font-[500]">
                            <h3 className="text-xl font-semibold">
                              {patient?.firstName + " " + patient?.lastName}
                            </h3>
                            <p className="">
                              <span>{patient?.gender}</span> |{" "}
                              <span>{patient?.martialStatus}</span>
                            </p>
                            <p>
                              <span>{date}</span> | <span>{time}</span>
                            </p>
                            <p>Reason for visit Menopause</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <h3
                            onClick={() => setIsDiseases(false)}
                            className={`${
                              !isDiseases && "bg-[#5F7DF2] text-white"
                            } uppercase bg-white shadow-md   px-4 py-1 cursor-pointer rounded-md font-medium`}
                          >
                            Treatment
                          </h3>
                          <h3
                            onClick={() => setIsDiseases(true)}
                            className={`${
                              isDiseases && "bg-[#5F7DF2] text-white"
                            } uppercase px-6 py-1 bg-white shadow-md cursor-pointer p-1.5 rounded-md font-medium`}
                          >
                            Medical History
                          </h3>
                        </div>
                      </div>
                    )}
                    {userId && (
                      <div className="flex items-center gap-4">
                        <img
                          src={doctor?.img}
                          class="rounded-full w-24"
                          alt="Avatar"
                        />
                        <div className="font-[500]">
                          <h3 className="text-xl font-semibold">
                            {doctor?.name}
                          </h3>
                          <p className="">
                            <span>{doctor?.designation}</span>
                          </p>
                          <p>
                            <span>{date}</span> | <span>{time}</span>
                          </p>
                          <p>Reason for your visit Menopause</p>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* 2 */}

                  {!isDiseases ? (
                    <>
                      <div className="relative mt-14 mb-6 max-w-sm">
                        <p className="px-2 text-gary-600 font-semibold text-sm pb-1">
                          Disease
                        </p>
                        <input
                        onChange={(e)=>setDiseasesName(e.target.value)}
                          disabled={!edit}
                          className="rounded-md px-2 py-2"
                          value={diseasesName}
                        />
                        <span className="absolute top-[32px] cursor-pointer right-16 px-1">
                          {" "}
                          <MdOutlineEditCalendar
                            className={`${edit ? "hidden" : "flex"}`}
                            onClick={() => setEdit(true)}
                            size={23}
                          />
                          <AiOutlineCheck
                            onClick={() => setEdit(false)}
                            className={`${
                              !edit && "hidden"
                            } text-green-500 font-bold `}
                            size={24}
                          />
                        </span>
                      </div>

                      <Prescription
                        reReload={reReload}
                        setReReload={setReReload}
                        selectedPatient={selectedPatient}
                      />

                      <LabTest selectedPatient={selectedPatient} />
                    </>
                  ) : (
                    <>
                      <PatientDiseasesList
                        setSelectedDiseaseAppointment={
                          setSelectedDiseaseAppointment
                        }
                        setOpenDiseaseDetail={setOpenDiseaseDetail}
                        patient={patient}
                      />
                    </>
                  )}
                </>
              )}
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

              <PrimaryButton
                handleSubmit={() => {
                  setOpen(false);
                }}
                type="button"
              >
                save
              </PrimaryButton>
            </Modal.Footer>
          </form>
        </Modal>
      </React.Fragment>
    </>
  );
};

export default TreatmentDetailModal;
