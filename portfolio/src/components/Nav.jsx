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
        <button onClick={() => setShowNav(!showNav)}>Click</button>
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
          <Link to="/contact" className={location==='/contact' ? 'active' : ''}>
            <li>Contact us</li>
          </Link>
        </ul>
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
  );
};

export default Nav;
