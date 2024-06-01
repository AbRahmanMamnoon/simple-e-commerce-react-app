import React from 'react'
import { ShoppingCart } from 'phosphor-react'
import './navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={25}/>
        </Link>
      </div>
    </div>
  )
}