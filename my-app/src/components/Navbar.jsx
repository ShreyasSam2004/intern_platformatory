import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#">Apps</a>
          </li>
          <li className="nav-item">
            <a href="#">Chat</a>
          </li>
          <li className="nav-item">
            <a href="#">Calendar</a>
          </li>
          <li className="nav-item">
            <a href="#">Email</a>
          </li>
        </ul>
      </div>
      <div className="navbar-center">
        <h1>Title</h1>
      </div>
      <div className="navbar-right">
        <i className="fas fa-bell icon"></i>
        <i className="fas fa-angle-down icon"></i>
        <i className="fas fa-search icon"></i>
      </div>
    </nav>
  );
};

export default Navbar;
