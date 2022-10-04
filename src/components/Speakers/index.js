import { speakers } from './data';

import './speakers.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Speakers() {

  return (
      <section className="join" id="speaker-section">
        <h4>BOARD</h4>
        <h1>Meet chapter leaders</h1>
        <div id="desktop">
        <Carousel>
          <div className='floaty'>
            <div className={speakers[0]?.color} key={speakers[0]?.id}>
              <div className='inner-cardy'>
                <h3>{speakers[0]?.name}</h3>
                <p> {speakers[0]?.title}</p>
              </div>
            </div>
            <div className={speakers[1]?.color} key={speakers[1]?.id}>
              <div className='inner-cardy'>
                <h3>{speakers[1]?.name}</h3>
                <p> {speakers[1]?.title}</p>
              </div>
            </div>
            <div className={speakers[2]?.color} key={speakers[2]?.id}>
              <div className='inner-cardy'>
                <h3>{speakers[2]?.name}</h3>
                <p> {speakers[2]?.title}</p>
              </div>
            </div>
          </div>
          <div className='floaty'>
            <div className={speakers[3]?.color} key={speakers[3]?.id}>
              <div className='inner-cardy'>
                <h3>{speakers[3]?.name}</h3>
                <p> {speakers[3]?.title}</p>
              </div>
            </div>
            <div className={speakers[4]?.color} key={speakers[4]?.id}>
              <div className='inner-cardy'>
                <h3>{speakers[4]?.name}</h3>
                <p> {speakers[4]?.title}</p>
              </div>
            </div>
            <div className={speakers[5]?.color} key={speakers[5]?.id}>
              <div className='inner-cardy'>
                <h3>{speakers[5]?.name}</h3>
                <p> {speakers[5]?.title}</p>
              </div>
            </div>
          </div>
          <div className='floaty'>
            <div className={speakers[6]?.color} key={speakers[6]?.id}>
              <div className='inner-cardy'>
                <h3>{speakers[6]?.name}</h3>
                <p> {speakers[6]?.title}</p>
              </div>
            </div>
            <div className={speakers[7]?.color} key={speakers[7]?.id}>
              <div className='inner-cardy'>
                <h3>{speakers[7]?.name}</h3>
                <p> {speakers[7]?.title}</p>
              </div>
            </div>
          </div>
        </Carousel>
          {/* {speakers?.map((item)=>{
            return (
              <div className={item.color} key={item?.id}>
                <div className='inner-cardy'>
                  <h3>{item?.name}</h3>
                  <p> {item?.title}</p>
                </div>
              </div>
            )
          })} */}

        </div>
        <div id="mobile">
          <Carousel>
            <div className='floaty'>
              <div className={speakers[0]?.color} key={speakers[0]?.id}>
                <div className='inner-cardy'>
                  <h3>{speakers[0]?.name}</h3>
                  <p> {speakers[0]?.title}</p>
                </div>
              </div>
            </div>
            <div className='floaty'>
              <div className={speakers[1]?.color} key={speakers[1]?.id}>
                <div className='inner-cardy'>
                  <h3>{speakers[1]?.name}</h3>
                  <p> {speakers[1]?.title}</p>
                </div>
              </div>
            </div>
            <div className='floaty'>
              <div className={speakers[2]?.color} key={speakers[2]?.id}>
                <div className='inner-cardy'>
                  <h3>{speakers[2]?.name}</h3>
                  <p> {speakers[2]?.title}</p>
                </div>
              </div>
            </div>
            <div className='floaty'>
              <div className={speakers[3]?.color} key={speakers[3]?.id}>
                <div className='inner-cardy'>
                  <h3>{speakers[3]?.name}</h3>
                  <p> {speakers[3]?.title}</p>
                </div>
              </div>
            </div>
            <div className='floaty'>
              <div className={speakers[4]?.color} key={speakers[4]?.id}>
                <div className='inner-cardy'>
                  <h3>{speakers[4]?.name}</h3>
                  <p> {speakers[4]?.title}</p>
                </div>
              </div>
            </div>
            <div className='floaty'>
              <div className={speakers[5]?.color} key={speakers[5]?.id}>
                <div className='inner-cardy'>
                  <h3>{speakers[5]?.name}</h3>
                  <p> {speakers[5]?.title}</p>
                </div>
              </div>
            </div>
            <div className='floaty'>
              <div className={speakers[6]?.color} key={speakers[6]?.id}>
                <div className='inner-cardy'>
                  <h3>{speakers[6]?.name}</h3>
                  <p> {speakers[6]?.title}</p>
                </div>
              </div>
            </div>
            <div className='floaty'>
              <div className={speakers[7]?.color} key={speakers[7]?.id}>
                <div className='inner-cardy'>
                  <h3>{speakers[7]?.name}</h3>
                  <p> {speakers[7]?.title}</p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
  );
}

export default Speakers;
