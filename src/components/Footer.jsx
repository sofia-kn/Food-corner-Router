import React from "react";
import {Link} from 'react-router-dom';
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__wrapper">
      <div className="footer__icons">
        <ul className="footer__icons--list">
          <li className="footer__list--icon">
            <Link to="" className="footer__icon--link">
              <img src="images/instagram.svg" alt="instagram" />
            </Link>
          </li>
          <li className="footer__list--icon">
            <Link to="" className="footer__icon--link">
              <img src="images/twitter.svg" alt="twitter" />
            </Link>
          </li>
          <li className="footer__list--icon">
            <Link to="" className="footer__icon--link">
              <img src="images/facebook.svg" alt="facebook" />
            </Link>
          </li>
          <li className="footer__list--icon">
            <Link to="" className="footer__icon--link">
              <img src="images/linkedin.svg" alt="linkedin" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer__text">
      <span>  @ 2021 IndianFooood.com</span>
      </div>
    </div>
  );
}

export default Footer;
