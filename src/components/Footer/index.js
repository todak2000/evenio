import logo from '../../assets/logo.svg';
import './footer.css';

function Footer() {

  return (
      <>
      <header className="footer">
       <img src={logo} className="logo" alt="logo" />
       <div>
            <div>
                <h4>Address</h4>
                <p>2089 New Market , New Road, North Carolina, U.S.A</p>
            </div>
       </div>
       <div>
            <div>
                <h4>Email us</h4>
                <p>support@vtf.com</p>
            </div>
       </div>
       <div>
            <div>
                <h4>Call us</h4>
                <p>+234 34343434</p>
            </div>
       </div>
      </header>
      <div className='end'>
        <p>© 2021 Evenio, All Rights Reserved. re-created By Daniel Olagunju</p>
        <ul className='roww'>
            <li>Home</li>
            <li>About</li>
            <li>Schedule</li>
        </ul>
      </div>
      </>
  );
}

export default Footer;
