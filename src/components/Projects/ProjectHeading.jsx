import React, { useState } from 'react'
import { AOS } from 'aos'
import { motion } from 'framer-motion';
const ProjectHeading = ({ Sno, title, tech }) => {
    const [clicked, setClick] = useState(false);
    return (
        <div className=' mx-32 flex flex-col'>
            <div className=' relative py-6 '>
                <h1 onMouseEnter={() => setClick(true)} onMouseLeave={() => setClick(false)} className='hover:cursor-pointer font text-accent font-semibold text-6xl'>{title}</h1>
                {clicked &&
                    <motion.div
                        initial={{ x: -100, opacity: 0 }} // Start off-screen to the left and invisible
                        whileInView={{ x: 0, opacity: 1 }} // Move to its normal position and become visible
                        transition={{
                            type: "spring",
                            duration: 0.4,
                        }}
                        className={` w-auto overflow-hidden h-[4px] bg-accent `}
                        whileHover={{ width: "" }} />
                }
                <span className='  font-semibold text-gray-600 text-2xl'>{tech}</span>
            </div>
        </div>
    )
}

export default ProjectHeading
