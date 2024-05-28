import React from 'react'
import Navbar from '../Navbar/Navbar'
import Aos from 'aos'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Homepage from './Homepage'
import Contact from '../Contact/Contact'
const Landing = () => {
  return (
    <div className=''>
      <div className=''>
        <Navbar />
        <Homepage />
        <Skills />
        <Projects />
      </div>
      <Contact />
    </div>
  )
}

export default Landing
