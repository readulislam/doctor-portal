import React from 'react';
import { GiMedicines } from 'react-icons/gi';
import RegisterForm from './Form';
const RegisterView = ({props}) => {
  return (
    <>
    <section class="  md:flex bg-green-100/50 justify-between w-full ">
  <div className='flex-1 hidden lg:flex  items-center flex-col pt-28 '>
    <GiMedicines className='text-gray-300 ' size={150}/>
<h1 className='xl:text-4xl md:text-3xl font-bold uppercase pt-14  text-[#499AFA]'>The Indian College of
</h1>
<h2 className='xl:text-6xl md:text-5xl font-semibold uppercase pt-3 pb-4 text-[#499AFA]'>Lifestyle Medicine
</h2>
<p className='md:text-sm xl:text-lg text-gray-700 pb-4  '>Reinvigorates the passion for why  clinicians choose <br/> medicine
as their profession – to become true healers</p>
<GiMedicines className='text-gray-300 rotate-180 ' size={35}/>
<p></p>
  </div>
<RegisterForm props={props}/>
<div/>
</section>
    
    </>
  )
}

export default RegisterView