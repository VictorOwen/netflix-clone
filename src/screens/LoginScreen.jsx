import React,{useState} from 'react'
import './LoginScreen.css'
import netflixLogo from '../assets/netflixlogo.png';
import SignUpScreen from './SignUpScreen' 
import { BrowserRouter, Routes, Route } from "react-router";

function LoginScreen() {
const [signIn, setSignIn] = useState(false)

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src={netflixLogo}
          alt=""
        />
        <button onClick={() => setSignIn(true)}
        className="loginScreen_button">
          Sign In
        </button>
        <div className="loginScreen_gradient" />
        <div className="loginScreen_body">
          {signIn ? (
            <SignUpScreen/>
          ):(
            <>
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>
            Ready to watch? Enter your email to 
            create or restart your membership. 
          </h3>
          <div className="loginScreen_input">
            <form>
              <input type='email' placeholder='Email Address'/>
              <button 
              onClick={() => setSignIn(true)}
              className='loginScreen_getStarted'>GET STARTED</button>
            </form>
          </div>
          </>

          )}
          
        </div>
      </div>

      
    </div>
  )
}

export default LoginScreen
