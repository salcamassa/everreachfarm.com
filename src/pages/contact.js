import React from "react"
import { Link } from "gatsby"
import { Col, Container, Row } from "react-bootstrap";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSteam } from 'react-icons/fa';


const ContactPage = () => (
  <Layout pageInfo={{ pageName: "contact" }}>
    <SEO title="Contact" />
    <Row className="p-3">
      <Col lg="6" md="6" sm="12" xs="12">
        <h3>Contact Us</h3>
        <ul>
          <li>
          <FaInstagram/> Instagram
          </li>
        </ul>
      </Col>
      <Col>
        <p class="lead">Hi everyone! My name is Katelyn and I am the farmer-owner of Ever Reach Farm located in Pittsboro, NC. We are a relatively new farm, having started this summer, but are no strangers to the growing, cooking, and sharing of produce. I have spent the past 3 years working on other farms in the area learning the tricks of the trade and what the responsibility of being a farmer means to myself, the environment, and most importantly the community surrounding me. Since attending NC State for Agriculture, I found Chatham County to be a real jewel in the pocket of a small NC town--it has such strong community ties and a true appreciation for people and farming. Although I didn’t grow up here, I feel so ingrained in the community and the welcoming nature of learning and sharing with one another. This aspect of community, coupled with a passion for working in synchrony with the environment is the meaning behind what I do as a farmer. I also find immense joy in cooking and sharing the bounty, which is why I work to create a balance between farming and adding value to my products that I hope people will appreciate.</p>
      </Col>
    </Row>
    <Row className="p-3">

      <Col>
        <p class="lead">Hi everyone! My name is Katelyn and I am the farmer-owner of Ever Reach Farm located in Pittsboro, NC. We are a relatively new farm, having started this summer, but are no strangers to the growing, cooking, and sharing of produce. I have spent the past 3 years working on other farms in the area learning the tricks of the trade and what the responsibility of being a farmer means to myself, the environment, and most importantly the community surrounding me. Since attending NC State for Agriculture, I found Chatham County to be a real jewel in the pocket of a small NC town--it has such strong community ties and a true appreciation for people and farming. Although I didn’t grow up here, I feel so ingrained in the community and the welcoming nature of learning and sharing with one another. This aspect of community, coupled with a passion for working in synchrony with the environment is the meaning behind what I do as a farmer. I also find immense joy in cooking and sharing the bounty, which is why I work to create a balance between farming and adding value to my products that I hope people will appreciate.</p>
      </Col>
      <Col lg="6" md="6" sm="12" xs="12">
        <h3>Join our mailing list</h3>
        <ul>
          <li>
          <FaInstagram/> Instagram
          </li>
        </ul>
      </Col>
    </Row>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
