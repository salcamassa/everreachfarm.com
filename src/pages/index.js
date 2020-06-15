import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image"


const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <header class="hero">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 text-center">
            <Image src="main_logo.png" className="hero-image" />
          </div>
        </div>
      </div>
    </header>

    <Container className="mt-5">
      <Row className="row row-align-center align-center">
        <Col className="col-md-8">
          <h2 class="featurette-heading">Premium Produce</h2>
          <p class="lead">We grow what you want, and deliver it right to your door. </p>
        </Col>
        <Col className="col-md-4">
          <Image src="beets.jpeg" className="round-edges" />
        </Col>
      </Row>
      <Row className="row row-align-center align-center">
      <Col className="col-md-4">
          <Image src="f4.jpeg" className="round-edges" />
        </Col>
        <Col className="col-md-8">
          <h2 class="featurette-heading">Nestled Between the Trees</h2>
          <p class="lead">Ever Reach Farm is located in the Piedmont area of Pittsboro, North Carolina - right outside of Chapel Hill. You can find us at the nearby markets.</p>
        </Col>

      </Row>
      <Row className="row row-align-center align-center">
        <Col className="col-md-8">
          <h2 class="featurette-heading">Grown with Care</h2>
          <p class="lead">We utilize a no-till small scale methodology of growing which gives our produce the nutrients they naturally expect and love.</p>
        </Col>
        <Col className="col-md-4">
          <Image src="broccoli.jpeg" className="round-edges" />
        </Col>
      </Row>
    </Container>

   
  </Layout >
)

export default IndexPage
