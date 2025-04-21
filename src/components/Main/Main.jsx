import React from 'react'
import HiteshSirImage from '../SirImage/HiteshSirImage'

const Main = () => {
  return (
    <div className='relative z-40 h-[100vh]'>
        <p className='text-white text-2xl text-center mt-10 text-shadow-md text-shadow-amber-500/100 ' >Trusted by 1.5M Code Learners</p>
        <div className='flex justify-center gap-5'>
            <div className='w-[70vw] mx-20'>
                <p className='text-white text-[60px]  mt-40 font-sans font-bold'>Consistency and Community </p>
                <p className='text-orange-400 text-[50px] font-sans font-bold'>Learning from coding courses</p>
                <p className='text-white text-2xl mt-3 w-220'>Content is every where, we provide a learning experience that is unmatched. Bounties, peer learning peer code reviews, virtual hostel, Alumni Network, Doubt sessions, Group projects and so many other activities to keep you on track.</p>
            </div>
            <div className='mt-5'>
              <HiteshSirImage />
            </div>
        </div>
    </div>
  )
}

export default Main
