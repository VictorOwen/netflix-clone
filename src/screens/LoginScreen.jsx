import React from 'react'
import './LoginScreen.css'
import netflixLogo from '../assets/netflixlogo.png';
import { BrowserRouter, Routes, Route } from "react-router";

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src={netflixLogo}
          alt=""
        />
        <button className="loginScreen_button">
          Sign In
        </button>
        <div className="loginScreen_gradient" />
        <div className="loginScreen_body">
          <>
          <h1>Unlimited movies, TV shows and more.</h1>
          </>
        </div>
      </div>
    
      
    </div>
  )
}

export default LoginScreen
