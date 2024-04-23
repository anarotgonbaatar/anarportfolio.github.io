import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <div className='section' id='experience'>
      <h2>Experience</h2>

      <div id='exp-container'>
        <div className='exp-card'>
          <h3>Contractor Assistant • EZ Construction</h3>
          <h5>August 2017 - Present, Fullerton, CA</h5>
          <ul className='list'>
            <li>Performed a variety of construction tasks, prioritizing safety and efficiency</li>
            <li>Improved project completion speed by 50% through operational optimizations</li>
            <li>Managed materials handling, contributing to a 25% increase in project profitability</li>
          </ul>
        </div>
        <div className='exp-card'>
          <h3>Team Leader • Video Game Development Club at CSUF</h3>
          <h5>August 2021 - December 2021, Fullerton, CA</h5>
          <ul className='list'>
            <li>Led the development of video games "Grab'n'Go" and "Hungmen."</li>
            <li>Showcased strong leadership and technical skills in Unreal Engine, Blender 3D, and C++.</li>
          </ul>
        </div>
        <div className='exp-card'>
          <h3>Designer, driver, and programmer • Robotics Club at Fairfax Senior High</h3>
          <h5>August 2019 - March 2020, Los Angeles, CA</h5>
          <ul className='list'>
            <li>Participated in multiple FIRST Robotics competitions</li>
            <li>Used CAD to design and build the robot</li>
            <li>Drove the robot in competitions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience