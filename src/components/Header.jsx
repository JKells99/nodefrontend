import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <NavLink to={"/AddUser"} style={{paddingRight:"5px"}}>Add A New User</NavLink> 
       <NavLink to={"/ListAll"}>Show List Of Users</NavLink>

    </div>
  )
}

export default Header