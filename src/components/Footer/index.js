import logo from '../../assets/logo.png';
import './footer.css';

function Footer() {

  return (
      <>
      <header className="footer" id="footer">
       <img src={logo} className="logo" alt="logo" />
       <div>
            <div>
                <h4>Raise a support ticket</h4>
                <a href='https://isacaoc.on.spiceworks.com/portal'>Click Here</a>
            </div>
       </div>
       <div>
            <div>
                <h4>Email us</h4>
                <p>contact@isacaoc.com</p>
            </div>
       </div>
       {/* <div>
            <div>
                <h4>Call us</h4>
                <p>+234 34343434</p>
            </div>
       </div> */}
      </header>
      <div className='end'>
        <p>© 2031 ISACA OC chapter, All Rights Reserved</p>
        {/* <ul className='roww'>
            <li>Home</li>
            <li>About</li>
            <li>Schedule</li>
        </ul> */}
      </div>
      </>
  );
}

export default Footer;
