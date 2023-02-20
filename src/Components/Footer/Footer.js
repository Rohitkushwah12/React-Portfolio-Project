import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>© Rohit Kushwah. All Right reserved</p>
      </div>
      {/* socials */}
      <ul className="footer-social-media">
        <li>
          <a>
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a>
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a>
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a>
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
