import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Educationlist from '../../components/Education/Educationlist'
import Contact from '../../components/Contact/Contact'
import AboutMe from './AboutMe'
import { useSelector } from 'react-redux'

const About = () => {
  const theme = useSelector((state) => state.navbar.selectedTheme);
  return (
    <div className={` ${!theme ? ' bg-black' : ''}`}>
      <div className={` ${!theme ? ' bg-black' : ''}`}>
        <Navbar />
        <AboutMe/>
        <Educationlist />
      </div>
      <Contact />
    </div>
  )
}

export default About
