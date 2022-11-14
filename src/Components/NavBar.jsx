import React from 'react'
import {NavLink} from "react-router-dom"
const NavBar = () => {
  return (
    <>
       <nav>
            <NavLink to="/">Add New</NavLink>
            <NavLink to="/search">Search Note</NavLink>
            <NavLink to="/edit">Edit</NavLink>
       </nav>
    </>
  )
}

export default NavBar