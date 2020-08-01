import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image"


const IndexPage = () => (
  <Layout pageInfo={{ pageName: "home" }}>
    <SEO title="Home" keywords={[`farm`]} />
    <Image src="medleyZoomed.jpg" className="round-edges full-width-image" />
    <Row className="row row-align-center align-center">
      <Col className="col-md-8">
        <h2 class="featurette-heading">The Mission</h2>
        <p class="lead"> of Ever Reach Farm is to provide a place where life grows, nourishment is shared, and the community is valued. Through caring for the environment and its careful balance, we also care for the people who inhabit it and reap its bountiful harvest. We believe the simple act of growing, cooking, and sharing with others can bring us together in ways unimaginable. </p>
      </Col>
      <Col className="col-md-4">
        <Image src="farmbg.jpeg" className="round-edges" />
      </Col>
    </Row>
    <Row className="row row-align-center align-center">
      <Col className="col-md-4">
        <Image src="f4.jpeg" className="round-edges" />
      </Col>
      <Col className="col-md-8">
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
  </Layout >
)

export default IndexPage
