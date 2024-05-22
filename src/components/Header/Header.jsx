import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="left-side">
        <div className="logo">
          <h4>NomadKing</h4>
        </div>

        <nav className="navbar">
          <ul className="navbar-content">
            <li className="nav-item">
              <Link className="nav-link" to={'/'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/'}>Plans</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/'}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/'}>Help</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="login-actions">
        <button className="btn btn-login">Login</button>
        <button className="btn btn-signup">Signup</button>
      </div>
    </header>
  );
};

export default Header;
