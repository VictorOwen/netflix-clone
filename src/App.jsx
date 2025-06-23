import React, { useEffect, useState } from "react"
import "./App.css";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter, Routes, Route } from "react-router";
import { auth } from "./firebase";


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="app">
    {!user ? (
      <LoginScreen />
    ) : (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
    )}
    

    </div>
    
  );
}


export default App
