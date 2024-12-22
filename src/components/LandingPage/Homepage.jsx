import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';

const Homepage = () => {
    const theme = useSelector((store) => store.navbar.selectedTheme);
    return (
        <div className={`${!theme? ' bg-black' : ''} w-full py-16 overflow-hidden`}>
            <motion.div
                animate={{
                    transition: {
                        y: {
                            type: "spring",
                            stiffness: 30,
                            damping: 30,
                        },
                    },
                }}
                className='vsm:max-xl:mx-4 w-screen  flex flex-col xl:mx-32 md:py-20 flex-wrap'>
                <h1 data-aos="fade-up" data-aos-duration="500" className={` vsm:max-sm:text-6xl py-2 text-accent font-bold text-8xl`}>Harsh Sharma</h1>
                <motion.span
                  data-aos-offset="0"  data-aos="fade-up" data-aos-duration="1000" className={`vsm:max-sm:text-2xl font-bold text-black text-3xl ${!theme? 'text-white' : ' text-black'}`}>Full Stack Web Developer | React, Node.js, and Beyond</motion.span>
                <br />
                <span className={` flex flex-wrap vsm:max-sm:text-2xl text-3xl ${!theme? 'text-white' : ' text-black'}`} data-aos="fade-up" data-aos-duration="1500"><span className='text-accent font-semibold'>Hi,</span> I'm <span className=' text-accent font-semibold'>Harsh Sharma</span> , I turn vision into reality with code and design.
                </span>
            </motion.div>
        </div>
    )
}

export default Homepage
