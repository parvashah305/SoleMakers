import React from 'react'
import Footer from '../Components/Footer'
import Sneakers from '../Components/Sneakers'
import Home from '../Components/Home'
import Navbar from '../Components/Navbar'

function Home_routes() {
  return (
    <div>
       <Navbar/>
       <Home/>
       <Sneakers/>
       <Footer/>
    </div>
  )
}

export default Home_routes