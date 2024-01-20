import {useState} from 'react'
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const location=useLocation().pathname;
  return (
    <div>
      <div className="navbar-container">
        <div className="logo">
          <h1>My logo</h1>
        </div>
        <div>
        <ul>
          <Link to="/" className={location==='/' ? 'active' : ''}>
            <li>Home</li>
          </Link>
          <Link to="/about-us" className={location==='/about-us' ? 'active' : ''}>
            <li>About</li>
          </Link>
          <Link to="/portfolio" className={location==='/portfolio' ? 'active' : ''}>
            <li>Portfolio</li>
          </Link>
          <Link to="/services" className={location==='/services' ? 'active' : ''}>
            <li>Our services</li>
          </Link>
        </ul>
        </div>
        <div className='btn-container'>
          <div style={{display: 'flex', gap: '10px'}}>
            <div className='client-support'>
              <button>Client Support</button>
              <p style={{textAlign:'center'}}>9304945343</p>
            </div>
        <button className='btn-contact' onClick={()=>{}}>Contact us</button>
          </div>
        <div>
        <button className='button' onClick={() => setShowNav(!showNav)}>Click</button>
        <div className="mob-links-container">
            {showNav && <ul className='mob-links'>
            <Link to="/" className={location==='/' ? 'active' : ''}>
              <li>Home</li>
            </Link>
            <Link to="/about-us" className={location==='/about-us' ? 'active' : ''}>
              <li>About</li>
            </Link>
            <Link to="/portfolio" className={location==='/portfolio' ? 'active' : ''}>
              <li>Portfolio</li>
            </Link>
            <Link to="/contact" className={location==='/contact' ? 'active' : ''}>
              <li>Contact us</li>
            </Link>
          </ul>}
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
