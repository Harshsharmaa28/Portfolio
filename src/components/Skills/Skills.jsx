import React from 'react'
import SkillsList from './SkillsList'
import { language, libraries, database, backend, Tools } from '../../utils/constant'

const Skills = () => {
  return (
    <div className=' h-screen mx-32 overflow-hidden'>
      <h1 className=' text-5xl font-semibold text-accent'>Skills</h1>
      <div className=' py-4'>
        <SkillsList title={"Language"} data={language} />
        <SkillsList title={"Libraries and Frameworks"} data={libraries}/>
        <SkillsList title={"Backend"} data={backend}/>
        <SkillsList title={"Database"} data={database}/>
        <SkillsList title={"Tools and Technologies"} data={Tools}/>
      </div>
    </div>
  )
}

export default Skills