import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link className="footer-link">Help</Link>
        <Link className="footer-link">Blog</Link>
        <div className="logo footer-logo">Nomad <br /> King</div>
        <Link className="footer-link">Company</Link>
        <Link className="footer-link">Policies</Link>
      </div>
      <p className="footer-copy">&copy; 2024 NomadKing. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
