import logo from '../../assets/logo.png';
import hamburger from '../../assets/hamburger.png';
import close from '../../assets/close.png';
import { useState } from 'react';

import './navbar.css';

function Navbar() {
    const [clickHamburger, setClickhamburger]= useState(false)
    const toggle =()=>{
        if (clickHamburger === true){
        setClickhamburger(false)
        }
        else if (clickHamburger === false){
        setClickhamburger(true)
        }
    }
  return (
      <header className="navbar">
        <img src={logo} className="logo" alt="logo" />
        <div className='nav-div'>
            <a href='#hero-section' className='normal-nav'>Home</a>
            <a href='#about-section' className='normal-nav'>About</a>
            <a href='#speaker-section' className='normal-nav'>Board</a>
            <a href='#schedule-section' className='normal-nav'>Events</a>
            <a href='#footer' className='normal-nav'>Contact</a>
            <a href='#ticket-section' className='button-nav'>Donate NOW</a>  
        </div>
        <img src={hamburger} className="hamburger" alt="hamburger" onClick={()=>{toggle()}}/>
        {clickHamburger && 
        <div className='nav-div-mobile'>
            <div className='close'><img src={close} className="hamburger" alt="hamburger" onClick={()=>{toggle()}}/></div>
            <a href='#hero-section' className='normal-nav'>Home</a>
            <a href='#about-section' className='normal-nav'>About</a>
            <a href='#speaker-section' className='normal-nav'>Board</a>
            <a href='#schedule-section' className='normal-nav'>Events</a>
            <a href='#footer' className='normal-nav'>Contact</a>
            <a href='#ticket-section' className='button-nav'>Donate NOW</a> 
        </div>
      }
        
      </header>
  );
}

export default Navbar;
