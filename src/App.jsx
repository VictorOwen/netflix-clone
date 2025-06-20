
import React from "react"
import "./App.css";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  const user = null;
 
  return (
    <div className="app">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
    

    </div>
    
  );
}


export default App
//{!user?(<LoginScreen/>):(