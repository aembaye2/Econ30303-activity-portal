// components/Navbar/index.js

import React from "react"
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements"

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/Discussion03">Discussion03</NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar
