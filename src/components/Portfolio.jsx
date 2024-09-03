import React from 'react';
import Nc from '../assets/portfolio/nc.png';
import Weather from '../assets/portfolio/weather.JPG';
import EplantShop from '../assets/portfolio/eplantshop.JPG';
import EventPlanner from '../assets/portfolio/eventPlanner.JPG';
import Calculator from '../assets/portfolio/calculator.JPG';
import Login from '../assets/portfolio/login.JPG';

const Portfolio = () => {


    const portfolios=[
        {
            id:1,
            src:Nc,
            demo: "https://naachiyarconstruction.netlify.app/",  
            code: "https://github.com/NambiMR/Construction.git"
        },
        {
            id:2,
            src:Weather,
            demo: "https://jsweathermonitor.netlify.app/",  
            code: "https://github.com/NambiMR/js-weather-monitoring.git"
        },
        {
            id:3,
            src:EplantShop,
            demo: "https://nambimr.github.io/e-plantShopping/",  
            code: "https://github.com/NambiMR/e-plantShopping.git"
        },
        {
            id:4,
            src:EventPlanner,
            demo: "https://nambimr.github.io/ibm_event/",  
            code: "https://github.com/NambiMR/ibm_event.git"
        },
        {
            id:5,
            src:Calculator,
            demo: "https://naachiyarconstruction.netlify.app/",  
            code: "https://github.com/NambiMR/React-Calculator.git"
        },
        {
            id:6,
            src:Login,
            demo: "https://naachiyarconstruction.netlify.app/",  
            code: "https://github.com/NambiMR/React-Login-Register.git"
        },
    ];

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-300'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {portfolios.map(({id, src, demo, code})=>(
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md hover:scale-105 duration-100' />
                    <div className='flex items-center justify-between p-4 mx-5 font-medium'>
                        <a href={demo} target="_blank" rel="noopener noreferrer" className='hover:scale-105 duration-150'>Demo</a>
                        <a href={code} target="_blank" rel="noopener noreferrer" className='hover:scale-105 duration-150'>Code</a>
                    </div>
                    </div>
                ))}
            
            </div>
        </div>
    </div>
  )
}

export default Portfolio