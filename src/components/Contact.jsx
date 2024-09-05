import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
const Contact = () => {
    const links=[
        {
            id:1,
            child:(
                <>
                    <ImProfile  size={30}/>
                </>
            ),
            href:"/resume.pdf",
            download:true,
        },
        {
            id:2,
            child:(
                <>
                    <FaLinkedin size={30}/>
                </>
            ),
            href:"https://www.linkedin.com/in/nambi25 ",
        },
        {
            id:3,
            child:(
                <>
                    <FaSquareGithub size={30}/>
                </>
            ),
            href:"https://github.com/NambiMR",
        },
        {
            id:4,
            child:(
                <>
                    <IoMail size={30}/>
                </>
            ),
            href:"mailto:nambimr2004@gmail.com",
        },
    ]
  return (
    <div name="contact" className='w-full h-auto bg-gradient-to-b from-black to bg-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-300'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/bzyldxpa" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                    />
                    <input type="email" name='email' placeholder='Enter Your Email' className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                    />
                    <textarea name="message" rows="10" placeholder='Say Somthing...' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
                    </textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                </form>
            </div>
            <div className='md:hidden'>
            <p className='p-4'>Check out my resume here</p>
                <ul className='flex justify-center gap-2'>
                {links.map(({id, child, href, download})=>(
                        <li key={id} className='flex justify-center items-center w-40  px-4  hover:scale-110 hover:rounded-md duration-300'>
                        <a href={href} 
                        className='flex justify-center items-center w-full text-white '
                        download={download}
                        target='_blank'
                        rel="noreferrer"
                        >
                        {child}
                        
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact