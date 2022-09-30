import './App.css';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import Data from './components/Data';
import Join from './components/Join';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Ticket from './components/Ticket';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {useEffect, useState} from 'react';
import up from './assets/up.png'

function App() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  });
  return (
    <div className="app">
      <div className="nav-padding">
        <Navbar />
      </div>
      {!show && <a href='#hero-section' className='backup'> <img src={up} alt="up" width="20"/></a> }
      <Hero />
      <About />
      <Data />
      <Join />
      <Schedule />
      <Speakers />
      <Ticket />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
