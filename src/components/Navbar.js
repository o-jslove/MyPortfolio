import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#about">About</a>
        </li>
        <li className="navbar-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="navbar-item">
          <a href="#degrees">Degrees</a>
        </li>
        <li className="navbar-item">
          <a href="#links">Links</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
