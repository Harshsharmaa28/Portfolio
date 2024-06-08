import React from 'react'
import Aos from 'aos'
import { useSelector } from 'react-redux';

const SkillsList = ({title,data}) => {
  const theme = useSelector((store) => store.navbar.selectedTheme);
  return (
    <div className={`flex flex-col gap-4 py-2 ${!theme ? '':' '}`}>
      <span className=' text-xl font-semibold'>{title}</span>
      <div className=' flex gap-5 flex-wrap '>
        {
            data?.map((item,idx) => (
                <div data-aos-duration={`${500 + idx * 500}`} data-aos="fade-right" className={`rounded-xl items-center border border-gray-300 flex gap-2 md:gap-4 px-2 py-2 md:px-6 md:py-3 ${!theme ? ' bg-gray-700 border-0':' '}`}>
                    <img key={item.id} className='w-[1rem] h-[1rem] md:w-[2rem] md:h-[2rem]' src={item.image} alt="Error" />
                    <span key={item.id} className={` text-xl ${!theme ? 'text-white ':' text-black '}`}>{item.title}</span>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default SkillsList
