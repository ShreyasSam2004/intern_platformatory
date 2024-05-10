import React from 'react';
import './Sidebar.css'; // Assuming you have a CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        Modernize
      </div>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <a href="#">Chat</a>
        </li>
        <li className="menu-item">
          <a href="#">Calendar</a>
        </li>
        <li className="menu-item">
          <a href="#">Email</a>
        </li>
        <li className="menu-item">
          <a href="#">Contacts</a>
        </li>
        <li className="menu-item">
          <a href="#">Courses</a>
        </li>
        <li className="menu-item">
          <a href="#">Employee</a>
        </li>
        <li className="menu-item">
          <a href="#">Notes</a>
        </li>
        <li className="menu-item">
          <a href="#">Tickets</a>
        </li>
        <li className="menu-item">
          <a href="#">Invoice</a>
        </li>
        <li className="menu-item">
          <a href="#">Todo</a>
        </li>
        <li className="menu-item">
          <a href="#">Taskboard</a>
        </li>
        <li className="menu-item">
          <a href="#">Blog</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
