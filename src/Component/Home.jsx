import React from 'react'
import Appbar from './Appbar'
import FirstHome from './FirstHome'
import SecondHome from './SecondHome'
import ThirdHome from './ThirdHome'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Appbar/>
      <FirstHome/>
      <SecondHome/>
      <ThirdHome/>
      <Footer/>
    </div>
  )
}

export default Home