import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../../Store/Auth-Slice'

const Menu = () => {
 
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
   
  <Button className='mr-4' onClick={()=>{ dispatch(authActions.logout());dispatch(authActions.registering())}}>Login</Button>
  <Button className='mr-4' onClick={()=>{ dispatch(authActions.logout());dispatch(authActions.registered())}}>Register</Button>

    <Dropdown

      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={()=>{ dispatch(authActions.logout())}}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
    
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