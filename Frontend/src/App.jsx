import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home_routes from './Home/Home_routes';
import Sneakers_routes from './Sneakers/Sneakers_routes';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import Login from './Components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)
  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Home_routes />} />
        <Route path="/sneakers" element={authUser?<Sneakers_routes/>:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* ToastContainer added globally outside of Routes */}
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
}

export default App;