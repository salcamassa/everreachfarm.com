import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from "prop-types";
import React from 'react';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = ({ src, className }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              extension
              relativePath
              publicURL
              childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    `}
    render={(data) => {
      const image = data.images.edges.find(
        image => image.node.relativePath === src
      )
      if (image) {
        return image.node.childImageSharp &&
          <Img className={className} fluid={image.node.childImageSharp.fluid} /> ||
          <img className={className} src={image.node.publicURL} />
      }

    }}
  />
);

Image.propTypes = {
  src: PropTypes.string,
};

export default Image;