import React from 'react'
import ProjectHeading from './ProjectHeading'
import { nexlearn } from '../../utils/constant'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className=' overflow-hidden h-screen'>
      <h1 className='mx-4  md:mx-32 text-3xl font-semibold text-accent md:py-14 vsm:max-sm:mt-10 py-6'>My Projects</h1>
      <div className='vsm:max-sm:flex-col flex ' >
        <div className=''>
          <ProjectHeading Sno={"1."} title={"Nex-Learn Platform"} tech={"#React #Tailwind #firebase #"} />
          <ProjectHeading Sno={"2."} title={"Netflix-Gpt"} tech={"#React #Tailwind #firebase #"} />
          <ProjectHeading Sno={"3."} title={"Karigar"} tech={"#React #Tailwind #firebase #"} />
          <div className=' mx-4 vsm:max-sm:py-5  md:mx-32 flex  gap-5 items-center'>
            <span className=' text-3xl font-medium text-accent'>See more Projects</span>
            <Link to={'/projects'}>
              <ArrowRight className=' w-10 h-10 hover:-rotate-45 border-2 border-accent rounded-full px-2 py-2 text-accent font-bold' />
            </Link>
          </div>
        </div>
        <div className='vsm:max-sm:w-screen vsm:max-sm:h-[20rem] flex justify-center items-center'>
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
