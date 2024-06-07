import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { nexlearn } from '../../utils/constant'
import ProjectsCard from './ProjectsCard'
import Contact from '../../components/Contact/Contact'
import { projectData } from '../../utils/constant'
import { useSelector } from 'react-redux'

const ProjectDescription = () => {
  const theme = useSelector((state) => state.navbar.selectedTheme);
  return (
    <div className={`${!theme? 'text-white' : ' text-black'}`}>
      <div className=''>
        <Navbar />
        <div className=' vsm:max-sm:items-center md:mx-32 gap-4 flex flex-col'>
          <span className='  text-5xl font-medium text-accent'>Projects</span>
          <span className=''>Here are some of my projects I'd like to share</span>
        </div>
        <div className=' py-10 md:mx-32 justify-center gap-10 flex flex-wrap'>
          {
            projectData?.map((data) => {
              return <ProjectsCard key={data.key} overview={data.imageUrl} title={data.title} description={data.description} sourceCodeLink={data.source_code} hostedUrl={data.hostedUrl} />
            })
          }
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default ProjectDescription
