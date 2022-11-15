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
    email: Yup.string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
      firstName: Yup.string().required(),
    password: Yup.string().required('Enter Valid Password'),
    confPassword: Yup.string().required('Enter Valid Password'),
  });
  