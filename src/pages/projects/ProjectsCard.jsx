import React from 'react'
import { Link } from 'react-router-dom'
import { SquareArrowOutUpRight } from 'lucide-react'
import Aos from 'aos'

const ProjectsCard = ({ overview, title, description, sourceCodeLink, hostedUrl }) => {
    return (
        <div className=''>
            <div data-aos="fade-up" data-aos-duration="500" className='shadow-lg w-[38rem] rounded-xl border-2 flex flex-col'>
                <img className=' object-cover border-b-1 rounded-xl w-full h-[20rem]' src={overview} alt="Error in loading image" />
                <div className=' px-4 py-1'>
                    <div className=' flex flex-col flex-wrap'>
                        <span>{title}</span>
                        <span>{description}</span>
                    </div>
                    <div className=' flex gap-2 py-1'>
                        <Link to={sourceCodeLink} className=' flex gap-1'>
                            <SquareArrowOutUpRight />
                            <span className=' underline'>Source Code</span>
                        </Link>
                        <Link to={hostedUrl} className=' flex gap-1'>
                            <SquareArrowOutUpRight />
                            <span className=' underline'>Live</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard
