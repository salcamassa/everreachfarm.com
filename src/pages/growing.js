import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GrowingPage = () => (
  <Layout pageInfo={{ pageName: "growing" }}>
    <SEO title="What's Growing" />
    <h1 className="text-center"><b>What's Growing</b></h1>
    <Row>
      <Col lg="4" md="4" sm="6" xs="12" className="p-3">
        <Image src="beets.jpeg" className="round-edges" />
        <h3 className="p-1 text-center">Beets</h3>
      </Col>
      <Col lg="4" md="4" sm="6" xs="12" className="p-3">
        <Image src="beets.jpeg" className="round-edges" />
        <h3 className="p-1 text-center">Beets</h3>
      </Col>
      <Col lg="4" md="4" sm="6" xs="12" className="p-3">
        <Image src="beets.jpeg" className="round-edges" />
        <h3 className="p-1 text-center">Beets</h3>
      </Col>
    </Row>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GrowingPage
