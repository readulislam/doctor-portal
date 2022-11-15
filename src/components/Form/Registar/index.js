import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Field, Formik ,ErrorMessage} from 'formik';
import { useDispatch } from 'react-redux'
import { authActions } from '../../../Store/Auth-Slice'
import { logInSchema } from '../Schema'
import { data } from './const'

const Registar = () => {
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
    console.log(e);
    dispatch(authActions.login())
  }
  return (
    <Formik
    initialValues={data}
    onSubmit={handleSubmit}
    validationSchema={logInSchema}
  >
    {({ handleSubmit, isSubmitting }) => (
      <div className="flex items-center mt-10 p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-6xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className=" overflow-y-auto">
              <h1 className=" flex mb-4 text-4xl bg-cyan-100/50  justify-center font-semibold text-gray-700 dark:text-gray-200">
                Patient Registration
              </h1>
            <main className="flex items-center grid-cols-4 justify-center p-6 sm:p-12">
            <form
              className="w-full "
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <select
              id="underline_select"
              className=" py-2.5  w-auto text-gray-500 grid-cols-1 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
            >
                <option selected>Title</option>
                <option value="B">Baby</option>
                <option value="Bo">Baby Of</option>
                <option value="Mr">Mr.</option>
                <option value="Mrs">Mrs.</option>
              </select>    
                  <label className='w-full grid-cols-1'  >
                    <Field
                      type="input"
                      className="mt-4 border-b-2"
                      placeholder='ENTER_YOUR_NAME'
                      name="firstName"
                    />
                    
                  </label>
                  <ErrorMessage name="firstName" />

                  <label>
                    <Field
                      type="text"
                      className="mt-4 "
                      placeholder='middleName'
                      name="middleName"
                    />
                  </label>

                  <label>
                    <Field
                      type="lastName"
                      className="mt-4 "
                      placeholder='lastName'
                      name="lastName"
                    />
                    <br/>
                  </label>
                  <ErrorMessage name="lastName" />

                  <label>
                    <Field
                      type="contactNo"
                      className="mt-4 "
                      placeholder='*contactNo'
                      name="contactNo"
                    />
                  </label>
                  <ErrorMessage name="contactNo" />
                  <TextInput  id="date" className="mt-4 " type="date" required={true} />

                  <label className="mt-6" check><br/>
                    <input type="checkbox" />
                    <span className="ml-2">
                      'I_AGREE_TO'{' '}
                      <span className="underline">'PRIVACY_POLICY'</span>
                    </span>
                  </label>

                  <Button
                    className="mt-4"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    CREATE_ACCOUNT
                  </Button>
                </form>
            </main>
          </div>
        </div>
      </div>
    )}
  </Formik>
  )
}

export default Registar