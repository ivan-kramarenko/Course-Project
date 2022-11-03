import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (): ReactElement => (
  <nav className="navbar justify-content-start p-2">
    <NavLink className="nav-item mx-3 text-decoration-none" to="/">
      Main
    </NavLink>
    <NavLink className="nav-item mx-3 text-decoration-none" to="/login">
      Login
    </NavLink>
    <NavLink className="nav-item mx-3 text-decoration-none" to="/guests">
      Guests
    </NavLink>
  </nav>
)

export default Navbar
