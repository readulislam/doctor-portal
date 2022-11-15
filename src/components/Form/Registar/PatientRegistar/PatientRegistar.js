import { Button, Label } from 'flowbite-react';
import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react'
import { PatientRegistarSchema } from '../../Schema';
import { INITIAL_DATA } from './constant';

const PatientRegistar = () => {
    const onSubmit=(value,option)=>{
        console.log(value,option);
      }
      return (
        <Formik
          initialValues={INITIAL_DATA}
          onSubmit={onSubmit}
          validationSchema={PatientRegistarSchema}
        >
          {({handleSubmit})=>{
            return(
              <form autoComplete='off' onSubmit={handleSubmit}>
                <Label>
                  <span>Patient Name</span>
                <Field
                    as="input"
                    className="mt-1 mb-3 border"
                    placeholder='name'
                    name="patientName"
                  />
                </Label>
                <ErrorMessage name='patientName'/>
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

export default PatientRegistar