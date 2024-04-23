import React from 'react'
import {FaGithub, FaLinkedin, FaInstagram, FaItchIo} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://linkedin.com" target='_blank' rel="noreferrer" className='social-link'><FaLinkedin/></a>
        <a href="https://github.com" target='_blank' rel="noreferrer" className='social-link'><FaGithub/></a>
        <a href="https://instagram.com" target='_blank' rel="noreferrer" className='social-link'><FaInstagram/></a>
        <a href="https://itch.io" target='_blank' rel="noreferrer" className='social-link'><FaItchIo/></a>
    </div>
  )
}

export default HeaderSocials