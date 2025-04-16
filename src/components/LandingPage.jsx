import React from 'react'
import Navbar from "./Navbar/Navbar.jsx"

// Component Importing
import Main from "./Main/Main.jsx"
import YoutubeVideos from './AfterHeroSection/YoutubeVideos.jsx'
import TweeterLove from './AfterHeroSection/TweeterLove.jsx'
import Cohort from './AfterHeroSection/Cohort.jsx'
import TechCompanys from './AfterHeroSection/TechCompanys.jsx'
import Testimonial from './AfterHeroSection/Testimonial.jsx'
import Udmey from './AfterHeroSection/Udmey.jsx'
import KeyBenifites from './AfterHeroSection/KeyBenifites.jsx'
import WhyChaicode from './AfterHeroSection/WhyChaicode.jsx'
import TopicsCloud from './AfterHeroSection/TopicsCloud.jsx'
import Community from './AfterHeroSection/Community.jsx'
import FreeApi from './AfterHeroSection/FreeApi.jsx'
import Footer from "./Footer/Footer"

const LandingPage = () => {
  return (
    <div >
      <Navbar />
      <Main />
      <YoutubeVideos />
      <TweeterLove />
      <TechCompanys />
      <Cohort />
      <Testimonial />
      <Udmey />
      <KeyBenifites />
      <WhyChaicode />
      <TopicsCloud />
      <Community />
      <FreeApi />
      <Footer />

    </div>
  )
}

export default LandingPage
