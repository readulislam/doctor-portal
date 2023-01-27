import { Formik } from 'formik'
import React from 'react'
import PrimaryButton from '../../../Common/PrimaryButton'
import RegistrationForm from '../../../Common/RegistrationForm'
import { initialValues } from './constant'

const RegisterForm = ({props}) => {
  return (
 <>
 <Formik
       initialValues={initialValues}
      onSubmit={props.handleFormSubmit}
      // enableReinitialize={isDataEmpty}
      // validationSchema={EditLocationError}
    >
     { ({ handleSubmit, isSubmitting, setFieldValue }) => (
 <form autoComplete="off" onSubmit={handleSubmit} className="flex-1 ">
 <RegistrationForm props={props} setFieldValue={setFieldValue}>
 <div className=" py-1 px-4 " id="registration" />
 <div className='flex flex-wrap pt-4 px-4  justify-between'>
      <PrimaryButton >
        Cancel
        </PrimaryButton>     
      <PrimaryButton type='submit'>
        Submit
        </PrimaryButton>     
         </div> 

       
 </RegistrationForm>
 
</form>
)}  
</Formik>
 
 
 </>
  )
}

export default RegisterForm