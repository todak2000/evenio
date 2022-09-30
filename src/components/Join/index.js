import networking from '../../assets/networking.png';
import productivity from '../../assets/productivity.png';
import creativity from '../../assets/creativity.png';
import clients from '../../assets/clients.png';
import party from '../../assets/party.png';
import top_speakers from '../../assets/top_speakers.png';


import './join.css';

function Join() {

  return (
      <section className="join" id="join-section">
        <h4>JOIN THE EVENT</h4>
        <h1>Why Join Evenio</h1>
        <div>
          <div className='card'>
            <img src={networking} alt="networking logo"/>
            <h3>In-Person Networking</h3>
            <p>  All the Lorem Ipsum generators the Internet tendin to repeat predefined the chunks as necessary.</p>
            <h2>01</h2>
          </div>

          <div className='card'>
            <img src={productivity} alt="networking logo"/>
            <h3>Boosts Productivity</h3>
            <p>  All the Lorem Ipsum generators the Internet tendin to repeat predefined the chunks as necessary.</p>
            <h2>02</h2>
          </div>

          <div className='card'>
            <img src={creativity} alt="networking logo"/>
            <h3>Spark Creativity</h3>
            <p>  All the Lorem Ipsum generators the Internet tendin to repeat predefined the chunks as necessary.</p>
            <h2>03</h2>
          </div>

          <div className='card'>
            <img src={clients} alt="networking logo"/>
            <h3>Potential Clients</h3>
            <p>  All the Lorem Ipsum generators the Internet tendin to repeat predefined the chunks as necessary.</p>
            <h2>04</h2>
          </div>

          <div className='card'>
            <img src={top_speakers} alt="networking logo"/>
            <h3>Top Speakers</h3>
            <p>  All the Lorem Ipsum generators the Internet tendin to repeat predefined the chunks as necessary.</p>
            <h2>05</h2>
          </div>
          
          <div className='card'>
            <img src={party} alt="networking logo"/>
            <h3>After Party</h3>
            <p>  All the Lorem Ipsum generators the Internet tendin to repeat predefined the chunks as necessary.</p>
            <h2>05</h2>
          </div>
        </div>
        <a href='#ticket-section' className="call-to-action" >Purchase Ticket</a>
      </section>
  );
}

export default Join;
