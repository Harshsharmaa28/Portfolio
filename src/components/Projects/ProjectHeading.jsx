import React, { useState } from 'react'
import { AOS } from 'aos'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleSelectedPage } from '../../utils/navbarSlice';
const ProjectHeading = ({ Sno, title, tech }) => {
    const [clicked, setClick] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className=' mx-4 xl:mx-32 flex flex-col'>
            <div className='py-6'>
                <div className='flex flex-col'>
                    <div className=' flex gap-2 w-auto'>
                        <span className='vsm:max-sm:text-3xl hover:cursor-pointer font text-accent font-semibold text-5xl xl:text-6xl'>{Sno}</span>
                        <Link onClick={() => dispatch(toggleSelectedPage("Project"))} to={'/projects'}>
                            <h1 onMouseEnter={() => setClick(true)} onMouseLeave={() => setClick(false)} className='vsm:max-sm:text-3xl relative hover:cursor-pointer hover:opacity-100 md:opacity-75 font text-accent font-semibold text-5xl xl:text-6xl'>{title}
                                {clicked ? <motion.div
                                    initial={{ x: -100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        duration: 0.4,
                                    }}
                                    className={` rounded-full overflow-hidden h-[4px] bg-accent `}
                                    whileHover={{ width: "" }} />
                                    : <div className=' h-[4px]'></div>
                                }
                            </h1>
                        </Link>
                    </div>

                    <span className=' font-semibold text-gray-600 text-2xl'>{tech}</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectHeading
