import React from "react"
import CategoryLayout from '../layouts/category';
import { graphql } from 'gatsby';

export const query = graphql`
query MobileInfo {
    allDatoCmsMobilearticle(sort:{fields: meta___createdAt, order:DESC},filter:{locale:{eq:"pl"}}) {
      edges {
        node {
          author
          mainPhoto {
            fluid(maxWidth: 1000, maxHeight:800) {
              ...GatsbyDatoCmsFluid
            }
           }
          meta {
              createdAt(formatString:"MM.DD.YYYY")
          }
          thumbnail {
              url
          }
          articleTitle
          articleCategory
          excerpt
        }
      }
    }
  }
`;

const MobilePage = ({ data }) => {
  const dates = data.allDatoCmsMobilearticle.edges;

  return (
    <CategoryLayout title="Mobile" dates={dates} />
  )
}

export default MobilePage;
