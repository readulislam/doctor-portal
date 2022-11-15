const Yup = require('yup');

export const DoctorRegistarSchema = Yup.object({
  doctorName: Yup.string().required(),
  speciality: Yup.string().required(),
  email: Yup.string().email('Invalid Email Format').required(),
  password: Yup.string().required()
});
export const PatientRegistarSchema = Yup.object({
    patientName: Yup.string().required(),
    email: Yup.string().email('Invalid Email Format').required(),
    password: Yup.string().required()
  });
  export const logInSchema = Yup.object({
      firstName: Yup.string().required(" first Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      contactNo: Yup.string().required("contact Number is required"),

  });
  