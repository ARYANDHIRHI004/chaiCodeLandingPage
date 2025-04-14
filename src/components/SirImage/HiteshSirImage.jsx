import React from 'react'
import HiteshSir from "../../assets/hiteshSir.png"

const HiteshSirImage = () => {
  return (
    <div>
      <img className='w-130' src={HiteshSir} alt="hitesh sir" />
      <div>
        <p className=' flex text-white  bg-amber-600 h-10 items-center px-5 rounded-l-full'>Hitesh Choudhary</p>
      </div>
    </div>
  )
}

export default HiteshSirImage
