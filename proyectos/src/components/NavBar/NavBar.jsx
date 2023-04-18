import React from 'react'
import'./NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        <h1>Sabor y Aroma</h1>

        <nav>
            <ul>
                <li>
                  <NavLink to={`/categoria/3`}>Almacén</NavLink>
                </li>
                <li>
                <NavLink to={`/categoria/2`}>A Granel</NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar