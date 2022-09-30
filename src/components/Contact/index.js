import phone from '../../assets/phone.png';
import email from '../../assets/email.png';
import map from '../../assets/map.png';
import arrow from '../../assets/arrow-right.png';

import './contact.css';

function Contact() {

  return (
      <section className="contact" id="contact-section">
        <div className='top-left'>
            <h2>Our Venue</h2>
            <div>
                <img src={map} className="map-img" alt="map"/>
                <div className='write'>
                    <h4>Address</h4>
                    <p>55 Gerald lane, NY, 122020, U.S.A</p>
                </div>
            </div>

            <div>
                <img src={phone} className="map-img" alt="map"/>
                <div className='write'>
                    <h4>Call us</h4>
                    <p>+234 56565656565</p>
                </div>
            </div>

            <div>
                <img src={email} className="map-img" alt="map"/>
                <div className='write'>
                    <h4>Email us</h4>
                    <p>demo@demo.com</p>
                </div>
            </div>
        </div>
        <iframe 
            className='map' 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26439.9157404301!2d-118.39359700012388!3d34.069784252359064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b94bb50d68d5%3A0xb7a66f003953c3fa!2sWest%20Hollywood%2C%20CA%2090048%2C%20USA!5e0!3m2!1sen!2sng!4v1664509349411!5m2!1sen!2sng"  
            allowfullscreen="" 
            loading="lazy" 
            title='map'
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className='bottom'>
            <div>
                <img src={email} className="map-img" alt="map"/>
                <h4>Newsletter Subscribe</h4>
            </div>
            <div>
                <input className='input' placeholder='Enter your email address'/>
                <button className='input-button'><img src={arrow} alt="arrow" width="20"/></button>
            </div>
        </div>
      </section>
  );
}

export default Contact;
