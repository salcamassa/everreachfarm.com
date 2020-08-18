import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';


const nodeURL = 'https://www.instagram.com/p';

const ImageGallery = () => {
  const {
    allInstaNode: { edges },
  } = useStaticQuery(graphql`
    {
      allInstaNode(sort: { fields: timestamp, order: DESC }, limit:12) {
        edges {
          node {
            id
            caption
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const renderImages = () => {
    const images = edges.map(({ node }) => {
      const {
        id,
        caption,
        localFile: { childImageSharp },
      } = node;
      return (
        <div className="insta-item">
          <a href={`${nodeURL}/${id}`}>
            <Img
              loading="lazy"
              alt={caption || ''}
              fluid={childImageSharp.fluid}
            />
          </a>
        </div>
      );
    });

    return images;
  };

  return (
    <div className="insta-container">
      {renderImages()}
    </div>
  );
};

export default ImageGallery;