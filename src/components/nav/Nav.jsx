import React from 'react'
import './nav.css'
import {FaHome, FaBook, FaHammer, FaBrain, FaPhone} from "react-icons/fa"

const Nav = () => {
  return (
    <div id='navbar'>
      <a href="#about" className='nav-btn'>About</a>
      <a href="#experience" className='nav-btn'>Experience</a>
      <a href="#projects" className='nav-btn'>Projects</a>
      <a href="#skills" className='nav-btn'>Skills</a>
      <a href="#contact" className='nav-btn'>Contact</a>
    </div>
  )
}

export default Nav