import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { ImProfile } from "react-icons/im";

const SocialLinks = () => {
    const links=[
        {
            id:1,
            child:(
                <>
                    LinkedIn<FaLinkedin size={30}/>
                </>
            ),
            href:"https://www.linkedin.com/in/nambi25 ",
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                    Github<FaSquareGithub size={30}/>
                </>
            ),
            href:"https://github.com/NambiMR",
        },
        {
            id:3,
            child:(
                <>
                    Mail<IoMail size={30}/>
                </>
            ),
            href:"mailto:nambimr2004@gmail.com",
        },{
            id:4,
            child:(
                <>
                    Resume<ImProfile  size={30}/>
                </>
            ),
            href:"/resume.pdf",
            style:'rounded-br-md',
            download:true,
        }
    ]


  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id,child,href,style,download}) => (
                <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}>
                <a href={href} 
                className='flex justify-between items-center w-full text-white'
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
  )
}

export default SocialLinks