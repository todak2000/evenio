import bg from '../../assets/about_bg.png';

import './about.css';

function About() {

  return (
      <section className="about" id="about-section">
       <img src={bg} alt="about-bg" />
       <div className='about-writeup-div'>
            <h4>ABOUT US</h4>
            <h3>Welcome to ISACA Orange County Chapter</h3>

            <p>Welcome to the ISACA Orange County Chapter. The aim of the Chapter is to sponsor local educational seminars and workshops, conducts regular chapter meetings, and help to further promote and elevate the visibility of the IS audit, control and security profession throughout Orange County, California.
              ISACA is the premier location for CISOs, CIOs, Directors, etc. in the InfoSec, Audit, Risk, Cyber Security, Compliance and Privacy space. For a few years, the focus had been on risk, audit and perhaps fraud investigation, etc. but over the last 18 months to 2 years our focus has been strongly around InfoSec and Cyber Security.
              We have 900+ registered members on our monthly mailing list, about 30% of our members are Senior Level (Director and above IT / Security / Cyber Security); about 30% are Compliance / Risk / Privacy and Fraud; another 25% are Audit professionals; 5% – 10% are students or in some form or professional education.
              <a className='homepage' href="https://web.archive.org/web/20211206044355/https:/engage.isaca.org/orangecountychapter/home"> ISACA Global Engage Website</a>
            </p>
            <a href='#hero-section' >Engage on Social Media</a>
       </div>
      </section>
  );
}

export default About;
