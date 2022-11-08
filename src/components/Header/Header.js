import { Carousel } from 'flowbite-react'
import React from 'react'

const Header = () => {
  const data = [
    {
      id:1,
      image:'https://api.parashospitals.com/storage/page-banners/August2022/hydBWZeU07ipQP59FWv7.jpg'
  },
    
    
]
  return (
    <>
   
  <div className="h-56 sm:h-64 my-4 xl:h-80 2xl:h-96 mx-8">
  <Carousel slideInterval={5000} slide={false}>
   {
    data.map(d =>  <div style={{ 
      backgroundImage: `url(${d.image})` 
    }} className="bg-center h-full bg-cover flex flex-col text-4xl font-bold  items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
   <p className='italic text-sm '> Welcome to our Doctor Portal</p>
   Our Medical Experts
    </div>)
   }
   
  </Carousel>
</div>
    </>
  )
}

export default Header