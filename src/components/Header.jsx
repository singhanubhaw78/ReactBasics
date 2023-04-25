import React from 'react'
import "../styles/Header.css"
// for making not to reload
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>

    </nav>
  )
}

export default Header