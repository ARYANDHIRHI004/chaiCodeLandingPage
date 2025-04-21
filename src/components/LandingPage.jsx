import React from 'react'
import Navbar from "./Navbar/Navbar.jsx"

// Component Importing
import Main from "./Main/Main.jsx"
import YoutubeVideos from './YoutubeVideos.jsx'
import TweeterLove from './TweeterLove/TweeterLove.jsx'
import Cohort from './Cohort.jsx'
import TechCompanys from './TechCompanys.jsx'
import Testimonial from './Testimonial.jsx'
import Udmey from './Udmey.jsx'
import KeyBenifites from './KeyBenifites.jsx'
import WhyChaicode from './WhyChaicode.jsx'
import TopicsCloud from './TopicsCloud.jsx'
import Community from './Community.jsx'
import FreeApi from './FreeApi.jsx'
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
