import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="header__wrapper">
          <div className="header__logo">
            <img
              src="images/Logo.svg"
              alt="Logo"
              className="header__logo--img"
            />
          </div>
          <div className="header__list">
            <ul>
              <li className="header__list--item">
                <Link to="/" className="header__item--link">
                  Home
                </Link>
              </li>
              <li className="header__list--item">
                <Link to="/menu" className="header__item--link">
                  Menu
                </Link>
              </li>
              <li className="header__list--item">
                <Link to="/about" className="header__item--link">
                  About
                </Link>
              </li>
              <li className="header__list--item">
                <Link to="/contact" className="header__item--link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__menu">
          <ul className="header__menu--list">
            <li className="header__menu--item">
              <Link to="/" className="header__menu--link">Home</Link>
            </li>
            <li className="header__menu--item">
              <Link to="/menu" className="header__menu--link">Menu</Link>
            </li>
            <li className="header__menu--item">
              <Link to="/about" className="header__menu--link">About</Link>
            </li>
            <li className="header__menu--item">
              <Link to="/contact" className="header__menu--link">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
