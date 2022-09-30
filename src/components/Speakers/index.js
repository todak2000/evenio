import { speakers } from './data';

import './speakers.css';

function Speakers() {

  return (
      <section className="join" id="speaker-section">
        <h4>SPEAKERS</h4>
        <h1>Event Speakers</h1>
        <div>
          {speakers?.map((item)=>{
            return (
              <div className={item.color} key={item?.id}>
                <div className='inner-cardy'>
                  <h3>{item?.name}</h3>
                  <p> {item?.title}</p>
                </div>
              </div>
            )
          })}

        </div>
      </section>
  );
}

export default Speakers;
