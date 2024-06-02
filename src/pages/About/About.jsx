import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Educationlist from '../../components/Education/Educationlist'
import Contact from '../../components/Contact/Contact'
import AboutMe from './AboutMe'

const About = () => {
  return (
    <div className=' h-screen'>
      <div>
        <Navbar />
        <AboutMe/>
        <Educationlist />
      </div>
      <Contact />
    </div>
  )
}

export default About
