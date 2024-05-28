import React from 'react'
import { motion } from 'framer-motion'

const Homepage = () => {
    return (
        <div className='w-full py-16'>
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
                className='flex flex-col mx-32 py-20 flex-wrap w-[50%]'>
                <h1 data-aos="fade-up" data-aos-duration="500" className=' py-2 text-accent font-bold text-8xl'>Harsh Sharma</h1>
                <motion.span
                    data-aos="fade-up" data-aos-duration="1000" className=' font-bold text-black text-3xl'>Front and React.js Developer</motion.span>
                <br />
                <span data-aos="fade-up" data-aos-duration="1500" className=' text-3xl'><span className=' text-accent font-semibold'>Hi,</span> I'm <span className=' text-accent font-semibold'>Harsh Sharma</span> , I turn vision into reality with code and design.
                </span>
            </motion.div>
        </div>
    )
}

export default Homepage
