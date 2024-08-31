import React, { useState } from 'react'
import { logo } from '../../utils/constant';
import { CodeSquare, Moon, Sun } from 'lucide-react';
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSelectedPage, toggleSelectedTheme } from '../../utils/navbarSlice';
import { useEffect } from 'react';
import AOS from 'aos';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedPage = useSelector((state) => state.navbar.showSelectedPage);
  console.log(selectedPage)
  const theme = useSelector((state) => state.navbar.selectedTheme);
  const switchTheme = () =>{
    dispatch(toggleSelectedTheme());
  }
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div className='vsm:max-lg:mx-4 vsm:max-sm:flex vsm:max-sm:justify-center z-10 sticky top-0 overflow-hidden'>
      <div className=' py-14 md:py-24 flex justify-between lg:mx-32 h-20 items-center'>
        <div className='  vsm:max-sm:hidden'>
          <img className=' vsm:max-sm:hidden w-[5rem] h-[5rem]' src={logo} alt="" />
        </div>
        <div className={`backdrop-blur-md shadow-md ring-1 ${ theme ? ' ring-zinc-200' : ' ring-accent'}  flex gap-4 px-4 border-s-fuchsia-900 h-14 rounded-full justify-center items-center`}>
          <motion.span
            whileHover={{ scale: 1.08 }}
            onClick={() => {
              dispatch(toggleSelectedPage("Home"));
              navigate("/")
            }}
            className={`px-4 py-1.5 rounded-full cursor-pointer  ${!theme ? ' text-white' : ''} ${ selectedPage === "Home" ? ' bg-accent text-white font-semibold' : ' text-gray-900'}`}
          >
            Home
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.08 }}
            onClick={() => {
              dispatch(toggleSelectedPage("About"));
              navigate("/about")
            }}
            className={`px-4 py-1.5 text-gray-900 rounded-full cursor-pointer ${!theme ? ' text-white' : ''} ${selectedPage === "About"  ? 'bg-accent text-white font-semibold' : ' text-gray-900 '} `}
          >
            About
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.08 }}
            onClick={() => {
              dispatch(toggleSelectedPage("Project"));
              navigate("/projects")
            }}
            className={`px-4 py-1.5 rounded-full cursor-pointer  ${!theme ? ' text-white' : ''} ${selectedPage === "Project" ? 'bg-accent text-white font-semibold' : ' text-gray-900'}`}
          >
            Projects
          </motion.span>
          <motion.span
          onClick={switchTheme}
            whileHover={{ scale: 1.08 }}
            className={`py-1.5 rounded-full cursor-pointer`}
          >
            {theme? <Moon className=' text-accent' /> : <Sun className=' text-white'/>}
          </motion.span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
