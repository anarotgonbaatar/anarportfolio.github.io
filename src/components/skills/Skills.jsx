import React from 'react'
import './skills.css'
import { FaHtml5, FaCss3Alt, FaPython, FaReact, FaComments } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiUnrealengine, SiVisualstudiocode, SiBlender } from "react-icons/si";
import { RiTeamFill, RiTeamLine } from "react-icons/ri";
import { MdSyncProblem } from "react-icons/md";

const Skills = () => {
  return (
    <div className='section' id='skills'>
      <h2>Skills</h2>
      
      <div id='skills-container'>
        <div className='skill-card'>
          <FaHtml5 className='skill-icon'/>
          <h4>HTML</h4>
        </div>
        <div className='skill-card'>
          <FaCss3Alt className='skill-icon'/>
          <h4>CSS</h4>
        </div>
        <div className='skill-card'>
          <FaPython className='skill-icon'/>
          <h4>Python</h4>
        </div>
        <div className='skill-card'>
          <IoLogoJavascript className='skill-icon'/>
          <h4>JavaScript</h4>
        </div>
        <div className='skill-card'>
          <FaReact className='skill-icon'/>
          <h4>React</h4>
        </div>
        <div className='skill-card'>
          <SiVisualstudiocode className='skill-icon'/>
          <h4>VS Code</h4>
        </div>
        <div className='skill-card'>
          <SiUnrealengine className='skill-icon'/>
          <h4>Unreal Engine</h4>
        </div>
        <div className='skill-card'>
          <SiBlender className='skill-icon'/>
          <h4>Blender</h4>
        </div>
        <div className='skill-card'>
          <RiTeamFill className='skill-icon'/>
          <h4>Leadership</h4>
        </div>
        <div className='skill-card'>
          <RiTeamLine className='skill-icon'/>
          <h4>Teamwork</h4>
        </div>
        <div className='skill-card'>
          <MdSyncProblem className='skill-icon'/>
          <h4>Problem-Solving</h4>
        </div>
        <div className='skill-card'>
          <FaComments className='skill-icon'/>
          <h4>Communication</h4>
        </div>
      </div>

    </div>
  )
}

export default Skills