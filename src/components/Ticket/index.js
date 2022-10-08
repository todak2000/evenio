
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
                {item.amount !== "" && <h1>${item.amount}</h1>}
                
                <div>
                  {/* {console.log(item.writeup)} */}
                  {item.writeup.map((x)=>{
                    return (<p> <img src={markup} alt="markup" className='pass-img'/>{x}</p>)
                  })}
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
