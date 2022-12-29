import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import BetterWay from './BetterWay'
import FromOurBlog from './FromOurBlog'
import IntroductionHome from './IntroductionHome'
import SignUp from './SignUp'
import TomAtoCentence from './TomAtoCentence'
function HomeComponents() {
  return (
    <>
    <Navbar/>
    <IntroductionHome/>
    <BetterWay/>
    <TomAtoCentence/>
    <FromOurBlog/>
    <SignUp/>
    <Footer/>
    </>
  )
}

export default HomeComponents