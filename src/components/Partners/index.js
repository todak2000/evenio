import { partners } from './data';

import './partners.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

console.log(partners, "arprp")
function Partners() {

  return (
      <section className="partners" id="speaker-section">
        <h4>OUR PARTNERS</h4>
        <div id="desktop">
        <Carousel>
          <div className='floaty'>
            <div className="cardi" key={partners[0]?.id}>
              <img src={partners[0]?.img} alt={partners[0].name}/>
            </div>
            <div className="cardi" key={partners[1]?.id}>
              <img src={partners[1]?.img} alt={partners[1].name}/>
            </div>
            <div className="cardi" key={partners[2]?.id}>
              <img src={partners[2]?.img} alt={partners[2].name}/>
            </div>
            <div className="cardi" key={partners[3]?.id}>
              <img src={partners[3]?.img} alt={partners[3].name}/>
            </div>
          </div>
          <div className='floaty'>
            <div className="cardi" key={partners[4]?.id}>
              <img src={partners[4]?.img} alt={partners[4].name}/>
            </div>
            <div className="cardi" key={partners[5]?.id}>
              <img src={partners[5]?.img} alt={partners[5].name}/>
            </div>
            <div className="cardi" key={partners[6]?.id}>
              <img src={partners[6]?.img} alt={partners[6].name}/>
            </div>
            <div className="cardi" key={partners[7]?.id}>
              <img src={partners[7]?.img} alt={partners[7].name}/>
            </div>
          </div>
        </Carousel>

        </div>
        <div id="mobile">
          <Carousel>
            <div className='floaty'>
              <div className="cardi" key={partners[0]?.id}>
                <img src={partners[0]?.img} alt={partners[0].name}/>
              </div>
            </div>
            <div className='floaty'>
              <div className="cardi" key={partners[1]?.id}>
                <img src={partners[1]?.img} alt={partners[1].name}/>
              </div>
            </div>
            <div className='floaty'>
              <div className="cardi" key={partners[2]?.id}>
                <img src={partners[2]?.img} alt={partners[2].name}/>
              </div>
            </div>
            <div className='floaty'>
              <div className="cardi" key={partners[3]?.id}>
                <img src={partners[3]?.img} alt={partners[3].name}/>
              </div>
            </div>
            <div className='floaty'>
              <div className="cardi" key={partners[4]?.id}>
                <img src={partners[4]?.img} alt={partners[4].name}/>
              </div>
            </div>
            <div className='floaty'>
              <div className="cardi" key={partners[5]?.id}>
                <img src={partners[5]?.img} alt={partners[5].name}/>
              </div>
            </div>
            <div className='floaty'>
              <div className="cardi" key={partners[6]?.id}>
                <img src={partners[6]?.img} alt={partners[6].name}/>
              </div>
            </div>
            <div className='floaty'>
              <div className="cardi" key={partners[7]?.id}>
                <img src={partners[7]?.img} alt={partners[7].name}/>
              </div>
            </div>
          </Carousel>
        </div> 
      </section>
  );
}

export default Partners;
