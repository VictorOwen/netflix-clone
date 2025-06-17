import React from 'react'
import './LoginScreen.css'
import { BrowserRouter, Routes, Route } from "react-router";
function LoginScreen() {
  return (
    <div>
      <BrowserRouter>
        {!user ? (
          <LoginScreen/>
        ) : (
          <HomeScreen/>
        )}

      </BrowserRouter>
      
    </div>
  )
}

export default LoginScreen
