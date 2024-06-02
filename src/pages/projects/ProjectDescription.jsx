import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { nexlearn } from '../../utils/constant'
import ProjectsCard from './ProjectsCard'
import Contact from '../../components/Contact/Contact'
import { projectData } from '../../utils/constant'

const ProjectDescription = () => {
  return (
    <div>
      <div className=''>
        <Navbar />
        <div className=' mx-32 gap-4 flex flex-col'>
          <span className='  text-5xl font-medium text-accent'>Projects</span>
          <span className=''>Here are some of my projects I'd like to share</span>
        </div>
        <div className=' py-10 mx-32  gap-10 flex flex-wrap'>
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
