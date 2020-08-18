import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import MainLogo from "../images/mainLogo.png";


const Header = ({ siteTitle }) => (
  <header>

    <div
      className="header-container d-flex"
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}>

      <div class="header-links d-flex align-items-center p-2 width-33">
        <ul className="nav-menu">
          <Link to="/growing">
            <li>
              What's Growing
          </li>
          </Link>
          <Link to="/growing">
            <li>
              Prepared Foods
          </li>
          </Link>
        </ul>
      </div>
      <div className="text-center py-3">
        <Link to="/">
          <img
            src={MainLogo}
            className="header-logo"
            height="175"
            alt="everreachlogo" />
        </Link>
      </div>

      <div class="header-links d-flex align-items-center justify-content-end p-2 width-33">
        <ul className="nav-menu">
          <Link to="/about">
            <li>
              About Us
              </li>
          </Link>
          <Link to="/contact">
            <li>
              Contact
          </li>
          </Link>
          <span className="header-icon">
            <a href='https://www.instagram.com/everreachfarm/' target="_blank">
              <FaInstagram />
            </a>
          </span>
          <span className="header-icon">
            <a href='https://www.facebook.com/everreachfarm' target="_blank">
              <FaFacebookF />
            </a>
          </span>
        </ul>
      </div>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
