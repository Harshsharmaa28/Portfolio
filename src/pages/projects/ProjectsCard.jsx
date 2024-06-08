import React from 'react'
import { Link } from 'react-router-dom'
import { SquareArrowOutUpRight } from 'lucide-react'
import Aos from 'aos'
import { useSelector } from 'react-redux'

const ProjectsCard = ({ overview, title, description, sourceCodeLink, hostedUrl }) => {
    const theme = useSelector((state) => state.navbar.selectedTheme);
    return (
        <div className={`vsm:max-sm:mx-4 rounded-xl ${!theme? 'text-white border border-accent' : ' text-black'}`}>
            <div data-aos="fade-up" data-aos-duration="500" className=' shadow-lg md:w-[38rem] rounded-xl md:border-2 flex flex-col'>
                <img className=' border-b-1 rounded-t-xl w-full md:h-[20rem]' src={overview} alt="Error in loading image" />
                <div className={` py-4 px-4 md:py-6 ${!theme? 'text-white' : ' text-black'}`}>
                    <div className=' flex flex-col gap-1 flex-wrap'>
                        <span>{title}</span>
                        <span>{description}</span>
                    </div>
                    <div className=' flex gap-2 py-2'>
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
