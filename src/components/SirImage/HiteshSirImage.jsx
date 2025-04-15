import React from 'react'
import HiteshSir from "../../assets/hiteshSir.png"

const HiteshSirImage = () => {
  return (
    <div>
      <img className='w-210' src={HiteshSir} alt="hitesh sir" />
      <div>
        <p className=' flex text-white  bg-amber-500 h-20 items-center px-30 rounded-l-full font-sans font-bold text-4xl'>Hitesh Choudhary</p>
      </div>
    </div>
  )
}

export default HiteshSirImage
