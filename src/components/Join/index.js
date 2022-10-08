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
        <h4>JOIN THE COMMUNITY</h4>
        <h1>Why join ISACA OC chapter</h1>
        <div>
          <div className='card'>
            <img src={networking} alt="networking logo"/>
            <h3>Professional Networking</h3>
            <p>  ISACA Orange County boasts over <b>900+ active members, join like minded community and grow your professional network exposure.</b></p>
            <h2>01</h2>
          </div>

          <div className='card'>
            <img src={productivity} alt="networking logo"/>
            <h3>Boosts Productivity</h3>
            <p>There’s always something more to learn when it comes to improve a security program.  Learn About Productivity From security leaders and practitioners.</p>
            <h2>02</h2>
          </div>

          <div className='card'>
            <img src={creativity} alt="networking logo"/>
            <h3>Spark Creativity</h3>
            <p><b>Activate your creativity by emerging yourself among ISACA OC chapter members.</b> . Talking,listening or even just asking a member for their perspective on your cybersecurity problem can help you increase creativity.</p>
            <h2>03</h2>
          </div>

          <div className='card'>
            <img src={clients} alt="networking logo"/>
            <h3>Potential Clients</h3>
            <p>You may figure out who your target consumer by expensive corporate options but getting to know the your clients within community is priceless. A very trendy method of organic sales is involving with ISACA OC chapter.</p>
            <h2>04</h2>
          </div>

          <div className='card'>
            <img src={top_speakers} alt="networking logo"/>
            <h3>Top Speakers</h3>
            <p>Learn from industry leaders about how they are solving the challenges you might have today to improve your cybersecurity program. ISACA OC members can submit call for papers to become a community speaker and share insights with members.</p>
            <h2>05</h2>
          </div>
          
          <div className='card'>
            <img src={party} alt="networking logo"/>
            <h3>After Party</h3>
            <p>Being part of ISACA OC chapter is valuable to gain insights in cybersecurity industry. You can also win ISACA OC swag merchandise by participating during events or surveys or social media posts.</p>
            <h2>06</h2>
          </div>
        </div>
        <a href='https://www.linkedin.com/company/isaca-oc' className="call-to-action" id="schedule-section">Become a speaker</a>
      </section>
  );
}

export default Join;
