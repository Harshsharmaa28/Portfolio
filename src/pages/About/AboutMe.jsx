import React from 'react'
import Aos from 'aos'

const AboutMe = () => {
    return (
        <div className=' mx-32 flex'>
            <div>
                <img data-aos="fade-up" data-aos-duration="1000"  className='w-[30rem] h-[30rem] bg-blue-100' src="" alt="" />
            </div>
            <div  className=' px-24 flex flex-col items-center'>
                <h1 data-aos="fade-up" data-aos-duration="600" className='text-8xl text-accent font-semibold'>Hi, I'm Harsh Sharma</h1>
                <div className=' flex flex-col text-xl gap-10 py-4'>
                    <span data-aos="fade-up" data-aos-duration="800">I turn vision into reality with code. Whether I'm working on a website or any digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. </span>
                    <span data-aos="fade-up" data-aos-duration="1100">Explore my latest projects showcasing my expertise in Reactjs, Nextjs, Javascript, Typescript and web development.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
