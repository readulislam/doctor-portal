import React from 'react'
import CardView from '../../components/CardView/CardView'

import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'

const HomePage = () => {
  return (
    <div className='bg-primary dark:bg-primary'>
    
    <Navbar/>
    <Header/>
    <CardView/>

    </div>
  )
}

export default HomePage