import React from 'react'
import TweetCards from './TweetCards'

const TweeterLove = () => {
  return (
    <div className='relative z-40 min-h-[100vh] text-center'>
        <div>
            <p className='text-white text-2xl'>Love that we get from our community</p>
            <p className='text-6xl text-center mt-2 font-bold text-orange-400'> Tweet Love</p>
        </div>
        <div className='flex gap-15 m-15 flex-wrap justify-center'>
          <TweetCards tweetID={"1906390359841640771"} />
          <TweetCards tweetID={"1905574126112153860"} />
          <TweetCards tweetID={"1907045909394788416"} />
          {/* <TweetCards tweetID={"1913652712257835480"} />
          <TweetCards tweetID={"1912770280654794931"} />
          <TweetCards tweetID={"1913644339420340579"} /> */}
        </div>
        

        <button className='text-white text-3xl bg-orange-500 p-5 rounded-[50px] cursor-pointer hover:bg-amber-700' >Check all live Cohort</button>
    </div>
  )
}

export default TweeterLove
