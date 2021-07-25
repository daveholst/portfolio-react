import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/navbar.css';

function Navbar({ navIsSticky }) {
  // const { navIsSticky } = props;

  return (
    <nav className={navIsSticky ? 'sticky' : ''} id="navbar">
      <a href="#home"> ~/home </a>
      <a href="#about"> ~/about</a>
      <a href="#skills"> ~/skills</a>
      <a href="#projects"> ~/projects</a>
      <a href="#resume"> ~/cv</a>
      <a href="#contact"> ~/contact</a>
    </nav>
  );
}

// add proptype to stop linter from yelling!
Navbar.propTypes = {
  navIsSticky: PropTypes.bool,
};

export default Navbar;
