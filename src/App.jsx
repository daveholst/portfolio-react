import Header from './components/Header';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';

import './app.css';
import './styles/header.css';
import './styles/hero.css';

function App() {
  return (
    <main>
      <section id="home" className="landing-page-container">
        <Header />
        <Hero />
        <Navbar />
      </section>
      <div className="page-content">
        <About />
      </div>
    </main>
  );
}

export default App;
