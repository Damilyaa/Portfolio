import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">PORTFOLIO</h1>
      <nav className="header-nav">
        <Link to="/"><strong>Home</strong></Link>
        <Link to="/about"><strong>About</strong></Link>
        <Link to="/projects"><strong>Projects</strong></Link>
        <Link to="/contact"><strong>Contact</strong></Link>
      </nav>
    </header>
  );
};

export default Header;