import { Copyright, Github, Linkedin } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className=' mx-4 py-16 md:mx-32 flex justify-between'>
      <div className=' flex gap-1 text-gray-600 font-medium'>
        <div className=' flex gap-1'>
          <Copyright className=' text-gray-500' />
          <span>2024</span>
        </div>
        <span>Harsh Sharma</span>
      </div>
      <div className=' flex gap-3'>
        <Link to={'https://github.com/Harshsharmaa28/Portfolio'}>
          <Github className=' text-accent broder-2 border-accent' />
        </Link>
        <Link to={'https://www.linkedin.com/in/harsh-sharma-518257259'}>
          <Linkedin className=' text-accent broder-2 border-accent' />
        </Link>
        <Link>
        </Link>
      </div>
    </div>
  )
}

export default Footer
