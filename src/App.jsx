import React, { useEffect, useState } from "react"
import "./App.css";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./app/userSlice";
import ProfileScreen from "./screens/ProfileScreen";


function App() {

  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        dispatch(login({
          uid: authUser.uid,
          email: authUser.email,
        }));
        // console.log(authUser);
      } else {
        setUser(null);
        dispatch(logout());
        // console.log("No user logged in");
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className="app">
    {!user ? (
      <LoginScreen />
    ) : (
      <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
    )}

    </div>
    
  );
}


export default App
