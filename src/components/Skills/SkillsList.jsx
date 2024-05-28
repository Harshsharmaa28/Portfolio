import React from 'react'
import Aos from 'aos'

const SkillsList = ({title,data}) => {
  return (
    <div className='flex flex-col gap-4 py-2'>
      <span className=' text-xl font-semibold'>{title}</span>
      <div className=' flex gap-5 '>
        {
            data?.map((item,idx) => (
                <div data-aos-duration={`${500 + idx * 500}`} data-aos="fade-right" className=' rounded-xl items-center border border-gray-300 flex gap-4 px-6 py-3'>
                    <img key={item.id} className=' w-[2rem] h-[2rem]' src={item.image} alt="Error" />
                    <span key={item.id} className=' text-black text-xl'>{item.title}</span>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default SkillsList
