import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Sneakerpage from '../Components/Sneakerpage'
import Footer from '../Components/Footer'

function Sneakers_routes() {

  const [cart,setCart]=useState([])

  const handleClick=(item)=>{
    console.log(item)
    let present=false
    cart.forEach((product)=>{
      if(item.id==product.id){
        present =true
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
        <div className='min-h-screen'>
            <Sneakerpage handleClick={handleClick}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Sneakers_routes