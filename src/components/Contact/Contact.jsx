import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import ContactForm from './ContactForm'
import { Mail } from 'lucide-react';
import { useSelector } from 'react-redux';
import { email } from '../../utils/constant'

const Contact = () => {
  const [sendMail, setsendMail] = useState(false);
  const theme = useSelector((state) => state.navbar.selectedTheme);
  return (
    <div className={` ${!theme ? '  bg-black' : ''} overflow-hidden vsm:max-sm: md:h-screen `}>
      <div className=' mx-4 md:mx-32 h-[20rem] md:h-[30rem] bg-accent mt-20 rounded-3xl flex justify-center'>
        <div className=' flex flex-col gap-14 md:gap-20 justify-center items-center'>
          <div
            className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-2 text-accent transition-transform duration-150 focus-within:scale-[1.05] hover:scale-[1.05] hover:bg-foreground hover:text-background"
          >Get In Touch</div>
          <span className='vsm:max-sm:text-xl text-white text-5xl xl:text-7xl'>{email}</span>
          <button
            className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-2 text-accent transition-transform duration-150 focus-within:scale-[1.05] hover:scale-[1.05] hover:bg-foreground hover:text-background"
            onClick={() => setsendMail(true)}
          >
            <Mail className="h-6 w-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9" />
            <span className="text-base font-semibold sm:text-lg lg:text-xl">
              Send Message
            </span>
          </button>
        </div>
        {sendMail && <ContactForm setsendMail={setsendMail} />}
      </div>

      <Footer />
    </div>
  )
}

export default Contact
