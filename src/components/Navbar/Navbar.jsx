import React from 'react'
import chaiCode from "../../assets/chaicode-white.png"

const Navbar = () => {
  return (
    <div className='Nav flex justify-around items-center  text-white bg-black h-15 text-[15px] font-sans space-x-50 relative z-40'>
        <img src={chaiCode} alt="chaicode" className='w-40' />
        <ul className='flex space-x-8 '>
            <li className='cursor-pointer'>Cohort</li>
            <li className='cursor-pointer'>Udemy</li>
            <li className='cursor-pointer'>Docs</li>
            <li className='cursor-pointer'>Reviews</li>
        </ul>
        <button className='bg-white text-black w-25 h-8 rounded-4xl'>Login</button>
    </div>
  )
}

export default Navbar
