import { Modal } from "flowbite-react";
import { Formik } from "formik";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import PrimaryButton from "../../Common/PrimaryButton";
import RegistrationForm from "../../Common/RegistrationForm";
import useCommonApi from "../../hooks/useCommonApi";

const RegistarModal = ({
  setDone,
  open,
  setOpen,
  number,
  handleRegisterModel,
  setNumber,
}) => {
  const [stateId, setStateId] = useState("");
 
  const [patientInfo, setPatientInfo] = useState({});
 



  const { hospitals, states, cities } = useCommonApi({ stateId });

  const handleFormSubmit = ({dateOfBirth,...values}) => {
    const splitting = dateOfBirth.split("-");
    const userDate = splitting[2] + "/" + splitting[1] + "/" + splitting[0];
   


    handleRegisterModel({
      ...values,
      dateOfBirth:userDate,
      contact: number,
      city: "",
      state: "",
      middleName: "",
    });
  };

  const props = {
    cities,
    setStateId,
    number,
    setNumber,
    // handleFormSubmit,
    states,
    hospitals,
  };

  const initialValues = {
    title: "",
    firstName: "",
    lastName: "",

    dateOfBirth: "",
    address: "",
    location: "",
    gender: "",
    country: "",
    stateId: "",
    cityId: "",
    pinCode: "",
    martialStatus: "",
  };
  return (
    <React.Fragment>
      <Modal
        show={open}
        size="4xl"
        position="center"
        onClose={() => setOpen(false)}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          // enableReinitialize={isDataEmpty}
          // validationSchema={EditLocationError}
        >
          {({ handleSubmit, isSubmitting, setFieldValue }) => (
            <form autoComplete="off" onSubmit={handleSubmit} class=" ">
              <RegistrationForm props={props} setFieldValue={setFieldValue}>
              <hr className=' mt-4'/>
                <div className="flex flex-wrap px-4 mt-4 justify-between">
                 
                  <PrimaryButton>Cancel</PrimaryButton>
                  <PrimaryButton type="submit">Submit</PrimaryButton>
                </div>
              </RegistrationForm>
            </form>
          )}
        </Formik>
      </Modal>
    </React.Fragment>
  );
};

export default RegistarModal;
