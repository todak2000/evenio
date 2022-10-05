
import { tickets } from './data';
import markup from '../../assets/markup.png'
// import markdown from '../../assets/markdown.png';

import './ticket.css';



function Ticket() {


  return (
      <section className="ticket" id="ticket-section">
        <h4>PARTNERS</h4>
        <h1>Donate to support</h1>
        <div>
          {tickets.map((item)=>{
            return (
              <div class="ticket-card" key={item.id}>
                <h4>{item.title}</h4>
                <h1>${item.amount}</h1>
                <div>
                  <p> <img src={markup} alt="markup" className='pass-img'/>One sponsored speaker event</p>
                  <p> <img src={markup} alt="markup" className='pass-img'/>One email campaign</p>
                  <p> <img src={markup} alt="markup" className='pass-img'/>One social media campaign</p>
                  {/* <p> <img src={item.id === 3 || item.id === 2? markup: markdown} alt="markup" className='pass-img'/> Welcome Reception</p>
                  <p> <img src={item.id === 3 ? markup: markdown} alt="markup" className='pass-img'/>Welcome Reception</p> */}
                </div>
                {/* <a href='#sds' className="call-to-action-ticket" >DONATE NOW</a> */}
              </div>
            )
          })}
        </div>
        <a href='#sds' className="call-to-action-ticket" >DONATE NOW</a>
      </section>
  );
}

export default Ticket;
