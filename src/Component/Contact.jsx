import React from 'react'
import Appbar from './Appbar'
import FirstContact from './FirstContact'
import SecondContact from './SecondContact'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
        <Appbar/>
        <FirstContact/>
        <SecondContact/>
        <Footer/>
    </div>
  )
}

export default Contact