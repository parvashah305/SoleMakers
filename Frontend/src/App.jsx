import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home_routes from './Home/Home_routes'
import Sneakers_routes from './Sneakers/Sneakers_routes'
import Signup from './Components/Signup'
import Contact from './Components/Contact'

function App() {
  return (
    <div className='overflow-x-hidden '>
      

        <Routes>
          <Route path='/' element={<Home_routes/>}/>
          <Route path="/sneakers" element={<Sneakers_routes/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      
      
       
    </div>
  )
}

export default App