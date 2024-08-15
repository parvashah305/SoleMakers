import React from 'react'
import Navbar from '../Components/Navbar'
import Sneakerpage from '../Components/Sneakerpage'
import Footer from '../Components/Footer'

function Sneakers_routes() {
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen'>
            <Sneakerpage/>
        </div>
        <Footer/>
    </div>
  )
}

export default Sneakers_routes