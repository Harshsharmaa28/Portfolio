import React, { useState } from 'react'
import { logo } from '../../utils/constant';
import { Moon } from 'lucide-react';
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSelectedPage } from '../../utils/navbarSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedPage = useSelector((state) => state.navbar.showSelectedPage);
  return (
    <div className='sticky top-0 w-full'>
      <div className=' py-24 flex justify-between mx-32 h-20 items-center'>
        <div>
          <img className=' w-[5rem] h-[5rem]' src={logo} alt="" />
        </div>
        <div className='backdrop-blur-md shadow-md ring-1 ring-zinc-200  flex gap-4 px-6 border-s-fuchsia-900 h-14 rounded-full justify-center items-center'>
          <motion.span
            whileHover={{ scale: 1.08 }}
            onClick={() => {
              dispatch(toggleSelectedPage("Home"));
              navigate("/")
            }}
            className={`px-4 py-1.5 rounded-full cursor-pointer ${selectedPage === "Home" ? 'bg-accent text-white font-semibold' : ' text-gray-900'}`}
          >
            Home
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.08 }}
            onClick={() => {
              dispatch(toggleSelectedPage("About"));
              navigate("/about")
            }}
            className={`px-4 py-1.5 rounded-full cursor-pointer ${selectedPage === "About" ? 'bg-accent text-white font-semibold' : ' text-gray-900'}`}
          >
            About
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.08 }}
            onClick={() => {
              dispatch(toggleSelectedPage("Project"));
              navigate("/projects")
            }}
            className={`px-4 py-1.5 rounded-full cursor-pointer ${selectedPage === "Project" ? 'bg-accent text-white font-semibold' : ' text-gray-900'}`}
          >
            Projects
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.08 }}
            className={`py-1.5 rounded-full cursor-pointer`}
          >
            <Moon className=' text-accent' />
          </motion.span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
