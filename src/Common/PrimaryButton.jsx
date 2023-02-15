import React from 'react'

const PrimaryButton = ({type, children,handleSubmit ,isWidthFull,isBg}) => {
  
  return (
    <button onClick={handleSubmit}  className={`dark:bg-blue-900 bg-[#499AFA] ${isWidthFull&& 'w-full'}  ${isBg && isBg} py-2 uppercase dark:opacity-80 dark:text-white/90  px-4 rounded-md hover:bg-[#1467ce] text-white font-[500]`} type={type}>{children}</button>
  )
}

export default PrimaryButton
//{...(!type==='submit'&& {onClick:`${this.handleSubmit}`})}