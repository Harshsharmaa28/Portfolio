import React from 'react'
import SkillsList from './SkillsList'
import { language, libraries, database, backend, Tools } from '../../utils/constant'
import { useSelector } from 'react-redux'

const Skills = () => {
  const theme = useSelector((store) => store.navbar.selectedTheme);
  return (
    <div className={`mx-4 h-auto xl:mx-32 overflow-hidden ${!theme ? 'text-white':' '}`}>
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