import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Js from '../assets/js.png'
import ReactJs from '../assets/react.png'
import Bootstrap from '../assets/bootstrap.png'
import Tailwind from '../assets/tailwind.png'
import Python from '../assets/python.png'
import MySql from '../assets/mysql.png'
import GitHub from '../assets/github.png'

const Skills = () => {

    const skills=[
        {
            id:1,
            src: Html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src: Css,
            title:'CSS',
            style:'shadow-blue-400'
        },
        {
            id:3,
            src: Js,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src: ReactJs,
            title:'React.Js',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src: Bootstrap,
            title:'Bootstrap',
            style:'shadow-purple-500'
        },
        {
            id:6,
            src: Tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:7,
            src: Python,
            title:'Python',
            style:'shadow-yellow-200'
        },
        {
            id:8,
            src: MySql,
            title:'MySql',
            style:'shadow-cyan-800'
        },
        {
            id:9,
            src: GitHub,
            title:'GitHub',
            style:'shadow-white'
        },
    ]
  return (
    <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full h-auto md:h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-300'>Skills</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {skills.map(({id, src, title, style})=> (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Skills