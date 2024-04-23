import React from 'react'
import './projects.css'
import Grabngo from '../../assets/grabngo-cover.jpg'
import Hungmen from '../../assets/hungmen-cover.jpg'
import Portfolio from '../../assets/portfolio-home.png'
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className='section' id='projects'>
      <h2>Projects</h2>

      <div id="projects-container">
        <div className="project-card">
          <img src={Grabngo} className='project-cover' alt='project cover image'/>
          <div className='project-header'>
            <h3 className="project-title">Grab'n'Go</h3>
            <a href="https://anarotgo.itch.io/grab-n-go" className='project-link' target='_blank' rel="noreferrer"><FaExternalLinkAlt/></a>
          </div>
          <p>A shopping simulator game set in a time during the pandemic.</p>
          <div className="skill-container">
            <span className="skill">Unreal Engine</span>
            <span className="skill">UE Blueprints</span>
            <span className="skill">Blender</span>
          </div>
        </div>
        <div className="project-card">
          <img src={Hungmen} className='project-cover' alt='project cover image'/>
          <div className='project-header'>
            <h3 className="project-title">HUNGMEN</h3>
            <a href="https://anarotgo.itch.io/hungmen" className='project-link' target='_blank' rel="noreferrer"><FaExternalLinkAlt/></a>
          </div>
          <p>Probably the fanciest hangman game ever. Set in the old west, you have to guess a random word letter by letter and at least one man must survive from the hangings.</p>
          <div className="skill-container">
            <span className="skill">Unreal Engine</span>
            <span className="skill">UE Blueprints</span>
            <span className="skill">Blender</span>
          </div>
        </div>
        <div className="project-card">
          <img src={Portfolio} className='project-cover' alt='project cover image'/>
          <div className='project-header'>
            <h3 className="project-title">Portfolio Website</h3>
            <a href="https://anarotgo.itch.io/hungmen" className='project-link' target='_blank' rel="noreferrer"><FaExternalLinkAlt/></a>
          </div>
          <p>Personal portfolio website developed in React</p>
          <div className="skill-container">
            <span className="skill">React</span>
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects