import React from 'react'

const Testimonial = () => {
  return (
    <div className='relative z-40 h-[100vh] text-center'>
      <div className='mx-15'>
            <p className='text-7xl mt-2 font-bold text-orange-400'>Our Student feedback</p>
            <p className='text-white text-2xl mx-1 mt-3'>Explore the incredible advantages of enrolling in our courses and enhancing your skills.</p>
        </div>
        <button className='text-white text-3xl transition delay-80 duration-300 ease-in-out hover:shadow-lg shadow-amber-500/40 bg-orange-500 p-5 rounded-[50px] cursor-pointer ' >Join Cohort live classes</button>
    </div>
  )
}

export default Testimonial
