import { Field } from 'formik'
import React from 'react'

const InputField = ({element, type, name,labelName,placeholder}) => {
  return (  <label >
     <span class="block uppercase text-gray-500 text-xs font-semibold mb-2" >{labelName}</span>
    <Field  type={type} name={name} placeholder={placeholder} className="border-none px-3 py-2.5 placeholder-blueGray-300 text-gray-700 bg-white rounded text-md shadow appearance-none focus:outline-none focus:ring-0  focus:border-cyan-200   w-full ease-linear active:outline-none "/>
    </label>
  )
}

export default InputField