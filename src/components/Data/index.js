import speaker from '../../assets/speaker.png';
import sponsor from '../../assets/sponsors.png';
import ticket from '../../assets/ticket.png';
import workshop from '../../assets/workshop.png';
import { CountUp } from 'use-count-up'

import './data.css';

function Data() {

  return (
      <section className="data" id="data-section">
        <div className='data-row'>
          <img src={speaker} alt="speaker"/>
          <div>
            <h2> <CountUp isCounting end={54} duration={3.2} />+</h2>
            <p>Speakers</p>
          </div>
        </div>

        <div className='data-row'>
          <img src={workshop} alt="speaker"/>
          <div>
            <h2><CountUp isCounting end={24} duration={3.2} />+</h2>
            <p>Workshops</p>
          </div>
        </div>

        <div className='data-row'>
          <img src={ticket} alt="speaker"/>
          <div>
            <h2><CountUp isCounting end={201} duration={3.2} />+</h2>
            <p>Events</p>
          </div>
        </div>

        <div className='data-row'>
          <img src={sponsor} alt="speaker"/>
          <div>
            <h2><CountUp isCounting end={504} duration={3.2} />+</h2>
            <p>Sponsors</p>
          </div>
        </div>
      </section>
  );
}

export default Data;
