import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Row, Col, Container, Nav } from "react-bootstrap"
import monogramLogo from "../images/monogram.png"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSteam } from 'react-icons/fa';



const Footer = () => (
  <footer>
    <Container className="mx-5">
      <Row className="align-center mx-5">
        <Col className="col-auto">
          <img 
            className="d-inline-block align-top"
            height="100"
            alt="logo" 
            src={monogramLogo}/>
        </Col>
        <Col>
          <div className="d-flex mt-3 text-center">
            <div className="nav-link nav-border">
              <span>CSA</span>
            </div>
            <div className="nav-link nav-border">
              <span>About</span>
            </div>
            <div className="nav-link nav-border">
              <span>Contact</span>
            </div>
          </div>
        </Col>
        <Col className=" text-right footer-info">
          <div className="mb-2">
          <span className="footer-icons">
              <FaInstagram/>
            </span>
            <span className="footer-icons">
              <FaFacebookF/>
            </span>
            <span className="footer-icons">
              <FaTwitter/>
            </span>
          </div>
          <div>© All Rights Reserved</div>
        </Col>
      </Row>
    </Container>

  </footer>
)


export default Footer
