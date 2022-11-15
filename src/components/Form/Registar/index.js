import { Button, Label } from 'flowbite-react'
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
            <main className="flex items-center justify-center p-6 sm:p-12">
            <form
              className="w-full "
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <select
              id="underline_select"
              className=" py-2.5  w-auto text-gray-500 text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0  peer"
            >
              <option selected>Title</option>
              <option value="JA">Baby</option>
              <option value="DE">Baby Of</option>
              <option value="GR">Mr.</option>
              <option value="Aj">Mrs.</option>
            </select>    
                  <label className='w-full' >
                    <Field
                      type="input"
                      className="mt-1 b"
                      placeholder='ENTER_YOUR_NAME'
                      name="firstName"
                    />
                    <br/>
                  </label>
                  <ErrorMessage name="firstName" />

                  <label>
                    <span>
                    <br/>EMAIL</span><br/>
                    <Field
                      type="email"
                      className="mt-4 "
                      placeholder='YOUR_EMAIL'
                      name="email"
                    />
                  </label>
                  <ErrorMessage name="email" />

                  <label>
                    <span><br/>PASSWORD</span>
                    <Field
                      type="password"
                      className="mt-4 "
                      placeholder='**************'
                      name="password"
                    />
                    <br/>
                  </label>
                  <ErrorMessage name="password" />

                  <label>
                    <span><br/>CONFIRM_PASSWORD</span>
                    <Field
                      type="confPassword"
                      className="mt-4 "
                      placeholder='**************'
                      name="confPassword"
                    />
                    <br/>
                  </label>
                  <ErrorMessage name="confPassword" />

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