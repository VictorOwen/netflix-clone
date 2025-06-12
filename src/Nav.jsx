import React, { useEffect, useState } from 'react';
import './Nav.css';
import netflixLogo from './assets/netflixlogo.png';
import netflixAvatarLogo from './assets/netflix-avatar.png';

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100){
      handleShow(true);
      
    }else {
      handleShow(false);
    }

  }
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav_contents">
            <img 
                className="nav_logo"
                alt="Netflix Logo"
                src={netflixLogo}
            />
        
            <img 
                className="nav_avatar"
                src={netflixAvatarLogo}
                alt="Netflix User" 
            />

        </div>
        
    </div>
  );
}

export default Nav