import {useState} from 'react'
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const location=useLocation();
  console.log(location)
  return (
    <div>
      <div className="navbar-container">
        <div className="logo">
          <h1>My logo</h1>
        </div>
        <button onClick={() => setShowNav(!showNav)}>Click</button>
        <ul>
          <Link to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            <li>Home</li>
          </Link>
          <Link to="/about-us">
            <li>About</li>
          </Link>
          <Link to="/portfolio">
            <li>Portfolio</li>
          </Link>
          <Link to="/contact">
            <li>Contact us</li>
          </Link>
        </ul>
        <div className="mob-links-container">
            {showNav && <ul className='mob-links'>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about-us">
              <li>About</li>
            </Link>
            <Link to="/portfolio">
              <li>Portfolio</li>
            </Link>
            <Link to="/contact">
              <li>Contact us</li>
            </Link>
          </ul>}
        </div>
      </div>
    </div>
  );
};

export default Nav;
