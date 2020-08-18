import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image"
import InstagramContainer from "../components/instagramContainer"


const IndexPage = ({ data: { allInstaNode } }) => (
  <Layout pageInfo={{ pageName: "home" }}>
    <SEO title="Home" keywords={[`farm`]} />
    {/* <Image src="medleyZoomed.jpg" className="round-edges full-width-image" /> */}
    <InstagramContainer nodes={allInstaNode} />
    <div>
      <h3 className="see-more text-center" >
        <a  href='https://www.instagram.com/everreachfarm/' target="_blank">See More</a>
      </h3>
    </div>
  </Layout >
)

export const pageQuery = graphql`
  query IndexQuery {
    allInstaNode(filter: { username: { eq: "everreachfarm" } }) {
      edges {
        node {
          id
          username
          likes
          caption
          comments
          localFile {
            childImageSharp {
              fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`


export default IndexPage
