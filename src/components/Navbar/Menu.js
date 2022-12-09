import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Menu = () => {
  const {isLoggedIn ,isRegister,userInfo} =useSelector(state=>state.Auth)
 
 
  const dispatch=useDispatch()
  return (
   <div className='sticky z-10 top-0 '>
    <Navbar  className='mx-5 my-4'
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    Doctor Portal
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
 {!isLoggedIn &&  <Link to='/login'>
    <Button className='mr-4'>Login</Button>
  </Link> }
  {(!isLoggedIn && !isRegister) && <Link to='/register'>
    <Button className='mr-4' >Register</Button>
  </Link>}
  

   {isLoggedIn && <Dropdown

      arrowIcon={false}
      inline={true}
    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
    >
      <Dropdown.Header className='w-64'>
        <span className="block text-xl font-semibold">
          {userInfo.firstName+' '+userInfo.middleName}
        </span>
        <span className="block text-md tracking-wide font-medium truncate  ">
        {userInfo.contact}
        </span>
      </Dropdown.Header>
      <Dropdown.Item >
        <Link to='/patientView'>
          Dashboard
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
      //  onClick={()=>{ dispatch(authActions.logout())}}
       >
        Sign out
      </Dropdown.Item>
    </Dropdown>}
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
    href='/dashboard'
    >
      Home
    </Navbar.Link>
    <Navbar.Link >
      About
    </Navbar.Link>
    <Navbar.Link >
      Services
    </Navbar.Link>
    <Navbar.Link >
      Pricing
    </Navbar.Link>
    <Navbar.Link >
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
   
   </div>
  )
}

export default Menu