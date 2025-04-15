import React from 'react'

const BackCircles = ({color}) => {
  return (
    <div className="flex justify-center">
      <div className={`backCircle ${color} w-[390px] h-[390px] rounded-full blur-[200px]`}></div>
      </div>
  )
}

const BigBackCircles = ({color}) => {
  return (
    <div className="flex justify-center">
      <div className={`backCircle bg-linear-to-t ${color} w-[1500px] h-[1500px] blur-[400px] rounded-full opacity-80`}></div>
      </div>
  )
}

export {BackCircles, BigBackCircles}
