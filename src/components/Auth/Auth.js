import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../Form/Login'
import Registar from '../Form/Registar'
import Menu from '../Navbar/Menu'

const Auth = () => {
  const isRegister=useSelector(state=>state.auth.isRegister)
  return (
    <>
    <Menu/>
    {!isRegister &&<Registar/>}
    {isRegister &&<Login/>}
    </>
  )
}

export default Auth