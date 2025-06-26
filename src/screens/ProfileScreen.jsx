import React from 'react'
import Nav from "../Nav"
import "./ProfileScreen.css"
import netflixAvatarLogo from "../assets/netflix-avatar.png"
import { selectUser } from "../app/userSlice.js"
import { auth } from "../firebase"
import { useSelector } from 'react-redux';

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
      <Nav/>
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
        <img 
                
                src={netflixAvatarLogo}
                alt="" 
                
            />
            <div className="profileScreen_details">
              <h2>{user.email}</h2>
              <div className="profileScreen_plans"></div>
              <h3>Plans</h3>
              <button 
                  onClick={() => auth.signOut()} 
                  className="profileScreen_signOut"
                  >
                    Sign Out
              </button>
            </div>
        </div>

      </div>
       
      
    </div>
  )
}

export default ProfileScreen
