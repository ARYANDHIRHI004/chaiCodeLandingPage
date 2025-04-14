import React from 'react'
import chaiCode from "../../assets/chaicode-white.png"

const Navbar = () => {
  return (
    <div className='Nav flex justify-around items-center  text-white bg-black h-10'>
        <img src={chaiCode} alt="chaicode" className='w-30' />
        <ul className='flex space-x-8 '>
            <li className='cursor-pointer'>Cohort</li>
            <li className='cursor-pointer'>Udemy</li>
            <li className='cursor-pointer'>Docs</li>
            <li className='cursor-pointer'>Reviews</li>
        </ul>
        <button className='bg-white text-black w-20 rounded-4xl'>Login</button>
    </div>
  )
}

export default Navbar
