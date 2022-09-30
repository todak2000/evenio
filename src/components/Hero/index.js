import './hero.css';

function Hero() {

  return (
      <section className="hero" id="hero-section">
        <div className='writeup-div'>
            <h1>DIGITAL</h1>
            <h4>MARKETERS MEETUP</h4>
            <p>18 - 20 DECEMBER 2021 | PARK HYATT NEW YORK</p>

            <a href='#ticket-section' className="call-to-action" >Purchase Ticket</a>
        </div>
      </section>
  );
}

export default Hero;
