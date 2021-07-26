import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

import './app.css';
import './styles/header.css';
import './styles/hero.css';

function App() {
  // set a state to track Y axis/offset
  const [navIsSticky, setNavIsSticky] = useState(false);

  // bind event listener to state management with useEffect hook
  useEffect(() => {
    // get navbar height
    const navbarHeight = window.document.getElementById('navbar').clientHeight;
    window.onscroll = () => {
      if (window.pageYOffset >= window.innerHeight - navbarHeight) {
        setNavIsSticky(true);
      } else {
        setNavIsSticky(false);
      }
    };
  }, []);

  return (
    <main>
      <section id="home" className="landing-page-container">
        <Header />
        <Hero />
        <Navbar navIsSticky={navIsSticky} />
      </section>
      <div className="page-content">
        <About navIsSticky={navIsSticky} />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </main>
  );
}

export default App;
