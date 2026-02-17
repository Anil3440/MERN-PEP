import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav className='bg-black h-[50px] flex items-center justify-end gap-4 p-6 text-lg font-medium text-purple-700 border rounded-lg'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    </>
  )
}

export default NavBar
