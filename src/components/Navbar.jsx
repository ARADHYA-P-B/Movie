import React from 'react'
import Logo from '../assets/Logo.jpg'
 import {Link } from 'react-router-dom'

 const Navbar = () => {
  return (
    <div className='flex broder space-x-8 items-center bg-green-200'>
        <img className='w-[60px] h-[60px] 'src={Logo} alt="" />
        <Link to='/Movies' className='text-blue-600 text-3xl font-bold hover:scale-110 duration-300 hover-cursor-pointer'>Movies</Link>
        <Link to='/WatchList' className='text-blue-600 text-3xl font-bold hover:scale-110 duration-300 hover-cursor-pointer '>WatchList</Link>

    </div>
  )
}
export default Navbar