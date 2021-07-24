import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav id="navbar">
      <a href="#home"> ~/home </a>
      <a href="#about"> ~/about</a>
      <a href="#skills"> ~/skills</a>
      <a href="#projects"> ~/projects</a>
      <a href="#resume"> ~/cv</a>
      <a href="#contact"> ~/contact</a>
    </nav>
  );
}

export default Navbar;
