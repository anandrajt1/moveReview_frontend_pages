import React from 'react'
import '../index.css'
import { Link} from 'react-router-dom';


function Header() {
  return (
    <>
    <div className='h-24  bg-gradient-to-r from-gray-600 to-gray-950 px-6 shadow-sm md:shadow-lg '>

      <div className='max-w-screen-lg mx-auto flex flex-row items-center justify-between px-6  h-24 text-white'>
        <div>
          <Link to={'/'} className='font-semibold text-3xl font-logo text-yellow-300 md:text-3xl hover:scale-105 duration-200 hover:text-yellow-300'>MovieMinds</Link>
        </div>
        <div className='flex flex-row gap-5 text-xl text-yellow-600'>
          <Link to={'/'} className='hover:scale-105 duration-200 hover:text-yellow-300' href="">Home</Link>
          <Link className='hover:scale-105 duration-200 hover:text-yellow-300' href="">Movie</Link>
          <Link className='hover:scale-105 duration-200 hover:text-yellow-300' href="">About Us</Link>
        </div>
      </div>
 
    </div>
    
   

    </>
  )
}

export default Header