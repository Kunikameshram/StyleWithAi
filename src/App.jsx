import { useState, useEffect } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login"; // You'll need to create this component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  
  const location = useLocation();

  // Function to handle successful login
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };
  

  // Render the login page or the main app based on authentication status
  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar />
          <Outlet />
        </>
      ) : (
        <Login onLoginSuccess={handleLogin} />
      )}
    </>
  );
}

export default App;