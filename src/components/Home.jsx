import React from 'react';
import Hero from "../assets/art.png";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'> 
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full mt-10'>
                <h1 className='text-3xl text-gray-300'>Hey! It's me,</h1>
                <h1 className='text-4xl sm:text-6xl font-bold text-white'>Nambi Muthu Raja</h1>
                <h2  className='text-4xl font-medium text-gray-300'>Web Developer</h2>
                <p className='text-gray-300 py-4 max-w-md'> Passionate about crafting intuitive and dynamic web experiences. With a strong foundation in HTML, CSS, JavaScript, and React, I bring designs to life with clean, responsive code and an eye for detail. Let's create something amazing together!</p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 font-medium flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer hover:scale-110 duration-300'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <IoMdArrowDropright size={20} className='ml-1.5'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={Hero} alt="my profile" className=' mx-auto w-40 md:w-2/3 border-4 shadow-2xl shadow-gray-200' />
            </div>
       </div>
    </div>
  )
}

export default Home