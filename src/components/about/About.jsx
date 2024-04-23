import React from 'react'
import './about.css'
import Resume from '../../assets/resume.pdf'
import ME from '../../assets/portrait-fg.png'
import HeaderSocials from './AboutSocials'

const Header = () => {
  return (
    <header className='section' id='about'>
      <div className="container">
        <div className="intro">
          <h1>Anar Otgonbaatar</h1>
          <h5 className="text-light">Computer Science Undergraduate at CSUF</h5>
        </div>
        
        <div className='cta'>
          <a href={Resume} download className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

        <HeaderSocials/>

        <div className="portrait">
          <img src={ME} alt="portrait" />
        </div>

      </div>
    </header>
  )
}

export default Header