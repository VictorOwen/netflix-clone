import React from 'react';
import './HomeScreen.css';
import Nav from './Nav.jsx';
import Banner from './Banner.jsx';

function HomeScreen() {
 
    return (
      <>
       <div className="homeScreen">
        <Nav/>
        
         <Banner/>

        {/* Row */}
        
       </div>
      </>
    ); 
  }
  
  export default HomeScreen