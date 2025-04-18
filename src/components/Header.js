import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <section className="logo"><img src="/images/logo.png" alt="Logo" /></section>
      <section className="titles">
        <h1 className="title">Ocean Conservation Namibia</h1>
      </section>
      <nav className="normal">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/donate">Donate</Link></li>
        </ul>
      </nav>      
    </header>
  );
};

export default Header;