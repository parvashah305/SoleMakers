import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Sneakers from '../Components/Sneakers'
import Home from '../Components/Home'
import Navbar from '../Components/Navbar'

function Home_routes() {

  const [cart,setCart]=useState([])

  const handleClick=(item)=>{
    console.log(item)
    let present=false;
    cart.forEach((product)=>{
      if(item.id==product.id){
        present=true
      }
    })
    if(present){
      return
    }
    setCart([...cart,item])
  }

  return (
    <div>
       <Navbar size={cart.length}/>
       <Home/>
       <Sneakers handleClick={handleClick}/>
       <Footer/>
    </div>
  )
}

export default Home_routes