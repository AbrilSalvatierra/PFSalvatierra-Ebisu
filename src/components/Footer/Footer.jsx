import {Instagram, Facebook, LinkedIn}from '@mui/icons-material';
import { Link } from "react-router-dom";

import "./Footer.css";
import logo from "../../assets/img/logo.gif"

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="footer-section">
            <h4>Contacto</h4>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: info@ebisu.com</p>
        </div>
        <div className="footer-section">
            <Link to="/" className="logo">
                <img className="footer-logo" src={logo} alt="logo" />Ebisu
            </Link>
        </div>
        <div className ="footer-section">
            <h4>Síguenos</h4>
            <ul className="social-icons">
                <li><a href="https://www.instagram.com" target="_blank"><Instagram/></a></li>
                <li><a href="https://www.facebook.com" target="_blank"><Facebook/></a></li>
                <li><a href="https://www.linkedin.com" target="_blank"><LinkedIn/></a></li>
            </ul>
        </div>
    </footer>
  );
};

export default Footer;