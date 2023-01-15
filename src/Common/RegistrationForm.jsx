import { Field } from 'formik'
import { isEmpty } from 'lodash'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import { genderValue, location, martial, title } from '../Utils/mockData'
import InputField from './InputField'
import PrimaryButton from './PrimaryButton'
import SelectInput from './SelectInput'


const RegistrationForm = ({children,props, setFieldValue }) => {
const {cities, setStateId,hospitals,number,setNumber, states,} = props

  return (
    <>
     <div class="relative flex flex-col min-w-0 break-words w-full mb-6 bg-green-200 rounded-lg bg-blueGray-100 border-0">
    <div class="rounded-t  mb-0 text-center px-6 py-6">
    <p className='text-[#499AFA] font-bold uppercase text-2xl'>Registration</p>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <div>
      <h6 class="text-gray-700 text-sm mt-3 mb-6 font-bold uppercase">
          patient Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <SelectInput onchangeHandler={(event)=>{setFieldValue("title", event.target.value)}}  title='choose' name='title' labelName={'title'}>
                
                 {!isEmpty(title) &&
                    title.map(( name,index) => {
                      return (
                        <option key={index} value={name}>
                          {(name)}
                        </option>
                      );
                    })}
                 </SelectInput>
           
            
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
            <InputField  name={'dateOfBirth'}  element={Field} type='date' labelName={'date Of Birth'}/>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
             <InputField 
               
             name={'firstName'}  element={Field} type='text' labelName={'First name'}/>
            
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
            <InputField  name={'lastName'}  element={Field} type='text' labelName={'last name'}/>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
          
            <SelectInput 
            onchangeHandler={(event)=>{setFieldValue("martialStatus", event.target.value)}} 
            title='choose' name='martialStatus' labelName={'martial Status'}> 
            
             {!isEmpty(martial) &&
                    martial.map((name, index) => {
                      return (
                        <option key={index} value={name}>
                          {(name)}
                        </option>
                      );
                    })}
            </SelectInput>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
           
            <SelectInput
            onchangeHandler={(event)=>{setFieldValue("gender", event.target.value)}} 
            title='choose' name='gender' labelName={'gender'}> 
            {!isEmpty(genderValue) &&
                    genderValue.map((name, index) => {
                      return (
                        <option key={index} value={name}>
                          {(name)}
                        </option>
                      );
                    })}
            
            
            </SelectInput>
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300"/>

        <h6 class="text-gray-700 text-sm mt-3 mb-6 font-bold uppercase">
          Contact Information
        </h6>
        <div class="flex flex-wrap">
        <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label>
              <span class="block uppercase text-gray-500 text-xs font-semibold mb-2" >Mobile</span>
              <PhoneInput
                          defaultCountry="IN"
                          className="border-none px-3 py- placeholder-blueGray-300 text-gray-700 bg-white rounded text-md shadow appearance-none focus:outline-none focus:ring-0  w-full ease-linear active:outline-none "
                            placeholder="Enter phone number"
                            value={number}
                            onChange={setNumber}
                          />
              </label>
           
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
           
            <SelectInput 
            onchangeHandler={(event)=>{setFieldValue("location", event.target.value)}} 
            title='choose' name='location' labelName={'hospital'}>
            {!isEmpty(hospitals) &&
                    hospitals.map(({ id, name,address }) => {
                      return (
                        <option key={id} value={id}>
                          {(name+ ', '+ address)}
                        </option>
                      );
                    })}
            
              
               </SelectInput>
           
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
           
            <SelectInput
            onchangeHandler={(event)=>{setFieldValue("country", event.target.value)}} 
            title='choose' name='country' labelName={'country'}> 
            <option>India</option>
            
            </SelectInput>
            </div>
          </div>
        <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
            <SelectInput
            onchangeHandler={(event)=>{setFieldValue("stateId", event.target.value);setStateId(event.target.value)}} 
            title='choose' name='stateId' labelName={'state'}> 
            {!isEmpty(states) &&
                    states.map(({ id, name }) => {
                      return (
                        <option key={id} value={id}>
                          {(name)}
                        </option>
                      );
                    })}
            </SelectInput>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
            <SelectInput
            onchangeHandler={(event)=>{setFieldValue("cityId", event.target.value)}} 
            title='choose' name='cityId' labelName={'city'}> 
             {!isEmpty(cities) &&
                    cities.map(({ id, name }) => {
                      return (
                        <option key={id} value={id}>
                          {(name)}
                        </option>
                      );
                    })}
            
            </SelectInput>
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
            <InputField  name={'pinCode'}  element={Field} type='text' labelName={'pin code'}/>
            </div>
          </div>
          
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
            <InputField  name={'address'}  element={Field} type='text' labelName={'address'}/>
            </div>
          </div>
        
        
        </div>

       
      </div>

    {children}
  </div>
    </div>
    </>
  )
}

export default RegistrationForm