import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout pageInfo={{ pageName: "contact" }}>
    <SEO title="Contact" />
    <h1>Contact page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
