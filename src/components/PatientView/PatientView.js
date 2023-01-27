import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


const PatientView = () => {
  const {isLoggedIn ,isRegister,userInfo} =useSelector(state=>state.Auth)
  
  useEffect(() => {

  }, [])
  

  return (
    <div>
     
    </div>
    
  )
}

export default PatientView