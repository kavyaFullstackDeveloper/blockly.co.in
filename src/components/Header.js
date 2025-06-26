import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="logo" width="32" height="32" className="me-2" />
          <span className="fw-bold">ANISH KUMAR SINHA</span>
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto gap-3 text-center">
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
