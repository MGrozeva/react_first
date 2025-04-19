import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import './App.css';
import './style.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUserName(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };
  return (    
    <Router>
      <div className="App">
        <Header /> 
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
        </Routes> 
        {!isLoggedIn ? (
        <>
          <h2 className="legitimacy">Log in or register for more content</h2>
          <LoginForm onLogin={handleLogin} />
          <RegisterForm />
        </>
      ) : (
        <>
          <h2 className="legitimacy">Welcome, {userName}!</h2>
          <button onClick={handleLogout}>Logout</button>
          <div>
            <h2 className="legitimacy">Additional Content</h2>
            <p>Here's some content only logged-in users can see!</p>
            <p>Exclusive features go here.</p>
          </div>
        </>
      )}

        <Footer />
      </div>    
    </Router>
  );
}

export default App;
