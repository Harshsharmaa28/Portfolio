import React from 'react'
import ProjectHeading from './ProjectHeading'
import { nexlearn } from '../../utils/constant'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className=' overflow-hidden h-screen'>
      <h1 className='  mx-32 text-3xl font-semibold text-accent py-14'>My Projects</h1>
      <div className=' flex  ' >
        <div className=' '>
          <ProjectHeading Sno={"1. "} title={"1. Nex-Learn Platform"} tech={"#React #Tailwind #firebase #"} />
          <ProjectHeading title={"2. Karigar"} tech={"#React #Tailwind #firebase #"} />
          <ProjectHeading title={"2. Karigar"} tech={"#React #Tailwind #firebase #"} />
        </div>
        <div className='flex justify-center items-center'>
          <motion.img
            initial={{ x: 120, y: -150 }} // Start off-screen to the right and 100px down
            whileInView={{ x: 0, y: 0 }} // Move to its normal position
            transition={{
              type: "spring",
              duration: 0.6,
            }}
            className=' shadow-xl w-[37rem] h-[20rem]' src={nexlearn} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Projects
