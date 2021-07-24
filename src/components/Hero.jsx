import React from 'react';
import '../styles/hero.css';
import headShot from '../assets/images/headshot-sml.jpeg';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>
          Hi, I'm <strong>Dave Holst</strong>.<br />
          <br />A Full Stack JavaScript developer with a range of skills in
          development, design, education and engineering.
        </h1>
        <div className="hero-buttons">
          <a href="#projects">
            <button type="button">work</button>
          </a>
          <a href="https://docs.google.com/document/d/1q5_PXuCAqPiteqWMavtxkzISBhanCc1E7xg7F6MHcOk/export?format=pdf">
            <button type="button">cv</button>
          </a>
        </div>
      </div>

      <img src={headShot} alt="author headshot" />
    </div>
  );
}

export default Hero;
