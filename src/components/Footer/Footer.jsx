import React from 'react'
import chaiCode from "../../assets/chaicode-white.png"

const Footer = () => {
  return (
    <div className='relative z-40 text-white bg-gray-950 h-[70vh]'>
      <div className='flex justify-around pt-20 gap-200 h-[63vh]'>
        <div className="left">
            <img className='w-80' src={chaiCode} alt="" />
            <p className='mx-17 text-xl'>Home for Programmers</p>
        </div>
        <div className="right flex gap-10 text-xl mt-2">
            <ul>
                <li className='mt-3'>Courses</li>
                <li className='mt-3'>Cohort</li>
                <li className='mt-3'>Coding Hero</li>
                <li className='mt-3'>FreeAPI</li>
                <li className='mt-3'>Masterji</li>
            </ul>
            <ul>
                <li className='mt-3'>Docs</li>
                <li className='mt-3'>Privacy Policy</li>
                <li className='mt-3'>Terms of service</li>
                <li className='mt-3'>Pricing Policy</li>
                <li className='mt-3'>Refund Policy</li>
            </ul>
        </div>
      </div>
      <hr />
      <div className='absolute bottom-4 mx-38'>2024 Chaicode. All rights reserve</div>
    </div>
  )
}

export default Footer
