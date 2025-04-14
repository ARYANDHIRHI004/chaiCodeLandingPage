import React from 'react'
import HiteshSirImage from '../SirImage/HiteshSirImage'

const Main = () => {
  return (
    <div>
        <p className='text-white text-sm text-center mt-3' >Trusted by 1.5M Code Learners</p>
        <div className='flex justify-between'>
            <div className='w-5xl mx-10'>
                <p className='text-white text-6xl  mt-40'>Consistency and Community </p>
                <p className='text-orange-400 text-4xl mt-2'>Learning from coding courses</p>
                <p className='text-white text-l mt-2 w-150'>Content is every where, we provide a learning experience that is unmatched. Bounties, peer learning peer code reviews, virtual hostel, Alumni Network, Doubt sessions, Group projects and so many other activities to keep you on track.</p>
            </div>
             <div className='mt-20'><HiteshSirImage /></div>
        </div>
    </div>
  )
}

export default Main
