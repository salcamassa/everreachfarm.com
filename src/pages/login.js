import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LoginPage = () => (
  <Layout pageInfo={{ pageName: "login" }}>
    <SEO title="Login" />
    <h1>Login page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LoginPage
