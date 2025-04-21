import React from 'react'

const YoutubeVideos = () => {



  return (
    <div className='relative z-40 h-[100vh] text-center'>
      <button className='text-white text-3xl bg-orange-500 p-5 rounded-[50px] cursor-pointer hover:bg-amber-700' >Check all live Cohort</button>
      <div className='carousal flex justify-center items-center'>
          <div className='bg-gray-600 h-[55vh] w-[35vw] rounded-4xl absolute top-64 left-30'>1</div>
          <div className='bg-gray-400 h-[65vh] w-[45vw] rounded-4xl absolute top-50 z-3'>2</div>
          <div className='bg-gray-600 h-[55vh] w-[35vw] rounded-4xl absolute top-64 right-30'>3</div>
      </div>
    </div>
  )
}

export default YoutubeVideos
