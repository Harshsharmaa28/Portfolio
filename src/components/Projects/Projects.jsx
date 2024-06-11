import React from 'react'
import ProjectHeading from './ProjectHeading'
import { nexlearn } from '../../utils/constant'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projectHeadingData } from '../../utils/constant'
import { useDispatch } from 'react-redux'
import { toggleSelectedPage } from '../../utils/navbarSlice'

const Projects = () => {
  const dispatch = useDispatch();

  return (
    <div className=' overflow-x-hidden h-screen'>
      <h1 className='mx-4  md:mx-32 text-3xl font-semibold text-accent md:py-14 vsm:max-sm:mt-10 py-6'>My Projects</h1>
      <div className='vsm:max-sm:flex-col flex ' >
        <div className=''>
          {
            projectHeadingData?.map((data, idx) => (
              <ProjectHeading Sno={data.sno} title={data.title} tech={data.tech} />
            ))
          }
          <div className=' mx-4 vsm:max-sm:py-5  md:mx-32 flex  gap-5 items-center'>
            <span className=' text-3xl font-medium text-accent'>See more Projects</span>
            <Link onClick={() => dispatch(toggleSelectedPage("Project"))} to={'/projects'}>
              <ArrowRight className='vsm:max-sm:-rotate-45 w-10 h-10 hover:-rotate-45 border-2 border-accent rounded-full px-2 py-2 text-accent font-bold' />
            </Link>
          </div>
        </div>
        <div className='vsm:max-sm:hidden vsm:max-sm:h-[20rem] flex justify-center items-center'>
          <motion.img
            initial={{ x: 120, y: -150 }} 
            whileInView={{ x: 0, y: 0 }} 
            transition={{
              type: "spring",
              duration: 0.6,
            }}
            className=' shadow-xl w-[37rem] h-[20rem]' src={nexlearn} alt="" />
        </div>
        <div className='sm:hidden mx-4 vsm:max-sm:rounded-lg h-[15rem] flex justify-center items-center'>
          <motion.img
            className='md:hidden rounded-md shadow-xl w-[37rem]' src={nexlearn} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Projects
