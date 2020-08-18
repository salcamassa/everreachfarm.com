import { Link } from "gatsby"
import React from "react"
import { Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"



const AboutPage = () => (
  <Layout pageInfo={{ pageName: "about" }}>
    <SEO title="About" />
    <h1 className="text-center"><b>About Us</b></h1>
    <Row className="pt-5 px-3">
      <Col lg="6" md="6" sm="12" xs="12">
        <Image src="ginger-turmeric.jpg" className="round-edges growing-img" />
      </Col>
      <Col>
        <p class="lead">Hi everyone! My name is Katelyn and I am the farmer-owner of Ever Reach Farm located in Pittsboro, NC. We are a relatively new farm, having started this summer, but are no strangers to the growing, cooking, and sharing of produce. I have spent the past 3 years working on other farms in the area learning the tricks of the trade and what the responsibility of being a farmer means to myself, the environment, and most importantly the community surrounding me. Since attending NC State for Agriculture, I found Chatham County to be a real jewel in the pocket of a small NC town--it has such strong community ties and a true appreciation for people and farming. Although I didn’t grow up here, I feel so ingrained in the community and the welcoming nature of learning and sharing with one another. This aspect of community, coupled with a passion for working in synchrony with the environment is the meaning behind what I do as a farmer. I also find immense joy in cooking and sharing the bounty, which is why I work to create a balance between farming and adding value to my products that I hope people will appreciate.</p>
      </Col>
    </Row>
      <Row className="row row-align-center align-center">
      <Col lg="8" md="6" sm="12" xs="12">
        <h2 class="featurette-heading">Our Mission</h2>
        <p class="lead">to provide a place where life grows, nourishment is shared, and the community is valued. Through caring for the environment and its careful balance, we also care for the people who inhabit it and reap its bountiful harvest. We believe the simple act of growing, cooking, and sharing with others can bring us together in ways unimaginable. </p>
      </Col>
      <Col lg="4" md="6" sm="12" xs="12">
        <Image src="farmbg.jpeg" className="round-edges" />
      </Col>
    </Row>
    <Row className="row row-align-center align-center">
      <Col lg="4" md="6" sm="12" xs="12">
        <Image src="f4.jpeg" className="round-edges" />
      </Col>
      <Col lg="8" md="6" sm="12" xs="12">
        <p class="lead">Dedicated to serving high-quality, affordably-priced vegetables and value-added products to the local community</p>
      </Col>

    </Row>
    {/* <Row className="row row-align-center align-center">
      <Col className="col-md-8">
        <h2 class="featurette-heading">Grown with Care</h2>
        <p class="lead">We utilize a no-till small scale methodology of growing which gives our produce the nutrients they naturally expect and love.</p>
      </Col>
      <Col className="col-md-4">
        <Image src="broccoli.jpeg" className="round-edges" />
      </Col>
    </Row> */}
  </Layout>
)

export default AboutPage
