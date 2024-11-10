import React from 'react'
import { HiMenu } from "react-icons/hi";


const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex-justify-between items-center'>
        <div className='text-xl font-medium'>Kanwal Umair</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li className='manuLink'><a href='#hero'>Home</a></li>
            <li className='manuLink'><a href='#about'>About</a></li>
         <li className='manuLink'><a href='#contact'>Contact</a></li>
        </ul>
        <HiMenu className='md:hidden' size={30}/>
      </div>
    </div>
  )
}

export default Navbar