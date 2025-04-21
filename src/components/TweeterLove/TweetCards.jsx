import React from 'react'
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed';

const TweetCards = ({tweetID}) => {
  return (
    <div className='flex'>
        <div className='bg-blue-950  border-blue border-4 transition delay-80 duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-amber-600/100 w-[25vw] rounded-4xl shadow-md p-5 flex-1/2 justify-center items-center'>
            <TwitterTweetEmbed tweetId={tweetID} />       
        </div>
    </div>
  )
}

export default TweetCards
