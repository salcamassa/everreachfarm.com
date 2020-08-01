import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Image from "../components/image"
import growing from "../pageData/growing.json"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GrowingPage = () => (
  <Layout pageInfo={{ pageName: "growing" }}>
    <SEO title="What's Growing" />
    <Row>
      {
        growing.data.map
        (d =><Col lg="4" md="4" sm="6" xs="12" className="p-3">
        <Image src={d.imageSrc} className="round-edges growing-img" />
        <h3 className="p-1 text-center">{d.item}</h3>
      </Col> )
      }
      {/* <Col lg="4" md="4" sm="6" xs="12" className="p-3">
        <Image src="beets.jpeg" className="round-edges" />
        <h3 className="p-1 text-center">Beets</h3>
      </Col>
      <Col lg="4" md="4" sm="6" xs="12" className="p-3">
        <Image src="beans.JPG" className="round-edges" />
        <h3 className="p-1 text-center">Beets</h3>
      </Col>
      <Col lg="4" md="4" sm="6" xs="12" className="p-3">
        <Image src="beets.jpeg" className="round-edges" />
        <h3 className="p-1 text-center">Beets</h3>
      </Col> */}
    </Row>
  </Layout>
)

export default GrowingPage
