import { Button, Label } from 'flowbite-react';
import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react'
import { DoctorRegistarSchema } from '../../Schema';
import { INITIAL_DATA } from './Constant';

const DoctorRegistar = () => {
  const onSubmit=(value,option)=>{
    console.log(value,option);
  }
  return (
    <Formik
      initialValues={INITIAL_DATA}
      onSubmit={onSubmit}
      validationSchema={DoctorRegistarSchema}
    >
      {({handleSubmit})=>{
        return(
          <form autoComplete='off' onSubmit={handleSubmit}>
            <Label>
              <span>Doctor Name</span>
            <Field
                as="input"
                className="mt-1 mb-3 border"
                placeholder='name'
                name="doctorName"
              />
            </Label>
            <ErrorMessage name='doctorName'/>
            <Label>
              <span>Speciality</span>
            <Field
                as="input"
                className="mt-1 mb-3 border"
                placeholder='toxic'
                name="speciality"
              />
            </Label>
            <ErrorMessage name='speciality'/>
            <Label>
              <span>Email</span>
            <Field
                as="input"
                className="mt-1 mb-3 border"
                placeholder='dhsjkdh@yahoo.co.in'
                name="email"
              />
            </Label>
            <ErrorMessage name='email'/>
            <Label>
              <span>Password</span>
            <Field
                as="input"
                className="mt-1 mb-3 border"
                placeholder=''
                name="password"
              />
            </Label>
            <ErrorMessage name='password'/>
            <Button type='submit'  onClick={handleSubmit}>Registar</Button>
          </form>
        )
      }}
    </Formik>
  )
}

export default DoctorRegistar