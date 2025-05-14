import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { FaSearch, FaQuestionCircle, FaUser, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    'Anniversary',
    'Birthdays',
    'Gifts',
    'Candlelight Dinners',
    'Decorations',
    'Festivals',
    "Kid's Celebrations"
  ];

  return (
    <div className="navbar-wrapper">
      <div className="top-bar">
        <div className="logo">
          <img src={logo} alt="CherishX" />
        </div>

        <div className="search-bar">
          <input type="text" placeholder="What are you celebrating?" />
          <FaSearch className="search-icon" />
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className="nav-icons">
          <div className="icon-block"><FaQuestionCircle /><span>HELP CENTER</span></div>
          <div className="icon-block"><FaUser /><span>LOG IN</span></div>
          <div className="icon-block location">
            <FaMapMarkerAlt />
            <span className="city">JAIPUR</span>
          </div>
        </div>
      </div>

      <div className={`bottom-bar ${menuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <div key={item} className="nav-item">
            {item} <span className="dropdown">▼</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
