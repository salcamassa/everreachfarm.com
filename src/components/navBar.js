import React from "react"
import { Link } from "gatsby"
import mainLogo from "../images/main_logo.png"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  // console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar" className="px-7">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand href="#home">
            <img
              src={mainLogo}
              className="d-inline-block align-top"
              height="100"
              alt="logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            {/* <Link to="/about" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2" className="nav-border">
                ABOUT
              </Nav.Link>
            </Link>
            <Link to="/contact" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                CONTACT
              </Nav.Link>
            </Link> */}
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
