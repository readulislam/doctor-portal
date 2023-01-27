import { TextInput } from 'flowbite-react';
import React from 'react';
import PhoneInput from 'react-phone-number-input';
import ModelViewWrapper from '../Modal/ModelViewWrapper';

const AppointmentBookingView = ({props,modalHeaderTitle}) => {
  

  const {doctorData,setDate,date,slotsInfo,selected,setSelected,userId, number,setNumber,currentTime,disableDate} = props;

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month,day ].join('-');
}
 
console.log(formatDate(new Date()),'dd');

  return (
    <>
    
    <ModelViewWrapper PrimaryButtonType={'submit'} PrimaryButtonTitle={'Next'} modalHeaderTitle={modalHeaderTitle} props={props}>
        <div className="space-y-">
              <div className="grid grid-cols-2 gap-4 ">
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="name@flowbite.com"
                  disabled
                  value={doctorData?.hospital.name+','+doctorData?.hospital.address}
                />
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="name@flowbite.com"
                  disabled
                  value={doctorData?.department.name}
                />
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="name@flowbite.com"
                  disabled
                  value={doctorData?.name}
                />

                <TextInput
                  //defaultValue={formatDate(new Date())}
                  defaultValue={formatDate (new Date())}
                  id="date"
                  type="date"
                  required={true}
                  min={disableDate()}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />


            
              </div>
              <div>
                
             

              </div>

              <p className="text-base leading-relaxed py-4 px-1  text-gray-700 dark:text-gray-400">
                Consultation Charge : <span className="">{doctorData.basicCharges} Rs</span>
              </p>
              {slotsInfo?.data && (
                <h3 className="font-semibold w-full  text-center text-xl">
                  {slotsInfo.data}
                </h3>
              )}
              <div className="grid grid-cols-6 gap-4">
                {slotsInfo?.slots &&
                  slotsInfo?.slots?.map((data, index) => (
                    <div
                      key={index}
                      onClick={() => setSelected(data)}
                      className={`text-base bg-white max-w-[100px] ${
                        selected?.id === data.id && "bg-blue-600 text-white"
                      } ${
                        !data.isAvailable || data.time < currentTime
                          ? "bg-white text-gray-400/50"
                          : "shadow-md hover:bg-sky-500 hover:text-white cursor-pointer  "
                      } border   py-1 px-3 text-center rounded-md`}
                    >
                      {data.time}
                    </div>
                  ))}
              </div>
              <div className='mt-4'>
                {!userId && (
                  <>
                    <label className='px-1  text-gray-700 '>
                      <span>Phone Number</span>
                      <PhoneInput
                        defaultCountry="IN"
                        className="border-none px-3  mt-1 placeholder-blueGray-300 text-gray-700 bg-white rounded text-md shadow appearance-none focus:outline-none focus:ring-0  w-full ease-linear active:outline-none "
                        placeholder="Enter phone number"
                        value={number}
                        onChange={setNumber}
                      />
                    </label>

                  </>
                )}
                <div className='' id="patientBooking" />
              </div>
            </div>
    </ModelViewWrapper>
    
    
    
    </>
  )
}

export default AppointmentBookingView