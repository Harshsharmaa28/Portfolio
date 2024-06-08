import React from 'react'
import Aos from 'aos'
import { useSelector } from 'react-redux';

const AboutMe = () => {
    const theme = useSelector((state) => state.navbar.selectedTheme);
    return (
        <div className='vsm:max-sm:flex-col vsm:max-sm:items-center md:mx-32 flex'>
            <div className='vsm:max-sm:hidden vsm:max-sm:justify-center '>
                <img data-aos="fade-up" data-aos-duration="1000"  className=' mx-10vsm:hidden w-screen h-[20rem] md:w-[30rem] md:h-[30rem] bg-blue-100' src="" alt="" />
            </div>
            <div className=' vsm:max-sm:mx-4 md:px-24 flex flex-col vsm:max-sm:items-center'>
                <h1 data-aos="fade-up" data-aos-duration="600" className=' vsm:max-sm:py-4 text-8xl text-accent font-semibold'>Hi, I'm Harsh Sharma</h1>
                <div className=' flex flex-col text-xl gap-10 py-4'>
                    <span className={` ${!theme ? ' text-white' : ''}`}  data-aos="fade-up" data-aos-duration="800">I turn vision into reality with code. Whether I'm working on a website or any digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. </span>
                    <span className={` ${!theme ? ' text-white' : ''}`} data-aos="fade-up" data-aos-duration="1100">Explore my latest projects showcasing my expertise in Reactjs, Nextjs, Javascript, Typescript and web development.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
