import Header from './components/Header';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

import './app.css';
import './styles/header.css';
import './styles/hero.css';

function App() {
  return (
    <section id="home" className="landing-page-container">
      <Header />
      <Hero />
      <Navbar />
    </section>
  );
}

export default App;
