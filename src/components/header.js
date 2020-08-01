import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainLogo from "../images/mainLogo.png"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSteam } from 'react-icons/fa';


const Header = ({ siteTitle }) => (
  <header>
    <div className="text-center py-3">
        <Link to="/">
          <img
            src={MainLogo}
            className=""
            height="200"
            alt="everreachlogo" />
        </Link>
      </div>
    <div
      className="d-flex justify-content-between"
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}>



      <div class="mt-auto p-2 text-left">
        <ul className="nav-menu">
          <Link to="/about">
            <li>
              CSA
              </li>
          </Link>
          <Link to="/growing">
            <li>
              What's Growing
          </li>
          </Link>
        </ul>
      </div>
      
      <div class=" d-flex align-items-center p-2">
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
        </ul>
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
