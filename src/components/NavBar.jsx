import React, { useState } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';
const NavBar = () => {

    const [nav,setNav] = useState(false);

    const links = [
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'skills'
        },
        {
            id:5,
            link:'contact'
        },
    ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 z-50 text-gray-200 bg-black fixed'>
       <div>
        <h1 className='text-5xl font-head ml-2'>Nambi</h1>
       </div>
       <ul className='hidden md:flex'>
        {links.map(({id, link}) => (
            <li key={id}className='px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-150 duration-200'>
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
            </li>
        ))}
       </ul>
       <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4  text-gray-200 md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
       </div>
        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-20 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
            {links.map(({id, link}) => (
                <li key={id}className='px-4 py-6 cursor-pointer hover:scale-105 duration-200 capitalize text-4xl'>
                <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>
                    {link}
                </Link>
                </li>
            ))}
           </ul>
        )}
    </div>
  )
}

export default NavBar
