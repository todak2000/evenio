import bg from '../../assets/about_bg.png';

import './about.css';

function About() {

  return (
      <section className="about" id="about-section">
       <img src={bg} alt="about-bg" />
       <div className='about-writeup-div'>
            <h4>ABOUT EVENT</h4>
            <h3>Welcome to Digital Marketing Meetup 2021</h3>

            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accu santium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto. On the other hand we denounce with righteous indignation and disen like men who are so beguiled and demoralized by the charms of pleasure</p>
            <p>Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor. quae ab illo inventore veritatis </p>
            <a href='#hero-section' >Discover More</a>
       </div>
      </section>
  );
}

export default About;
