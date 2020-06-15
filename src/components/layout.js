/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navBar"
import Footer from "./footer"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main light-bg">
          {/* <Navbar pageInfo={pageInfo} /> */}
          <Row noGutters>
            <Col>
              <Container fluid className="px-0">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        {/* <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
                <Footer></Footer>
            </Col>
          </Row>
        </Container> */}
      </>
    )}
  />
)

export default Layout
