import React from 'react'
import Appbar from './Appbar'
import FirstAbout from './FirstAbout'
import SecondAbout from './SecondAbout'
import ThirdAbout from './ThirdAbout'
import Footer from './Footer'

const About = () => {
  return (
    <div>
        <Appbar/>
        <FirstAbout/>
        <SecondAbout/>
        <ThirdAbout/>
        <Footer/>
    </div>
  )
}

export default About