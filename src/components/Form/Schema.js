const Yup = require("yup");

export const DoctorRegistarSchema = Yup.object({
  name: Yup.string().required(),

  education: Yup.string().required(),
  designation: Yup.string().required(),
});
export const DoctorLogInSchema = Yup.object({
  doctorName: Yup.string().required(),
  contactNo: Yup.string().required(),
  hospitalName: Yup.string().required(),
  speciality: Yup.string().required(),
});
export const PatientRegisterSchema = Yup.object({
  firstName: Yup.string().required(" first Name is required"),
  lastName: Yup.string().required("Last Name is required"),

  address: Yup.string().required("address is required"),
  pincode: Yup.string().required("pincode is required"),
});
export const PatientLogInSchema = Yup.object({
  patientName: Yup.string().required(),
  contactNo: Yup.string().required(),
  hospitalName: Yup.string().required(),
});
