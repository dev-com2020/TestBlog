import * as React from "react"
import CategoryLayout from '../layouts/category';
import { graphql } from 'gatsby';

export const query = graphql`
query SmartInfo {
    allDatoCmsSmartweararticle(sort:{fields: meta___createdAt, order:DESC},filter:{locale:{eq:"pl"}}) {
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

const SmartPage = ({ data }) => {
  const dates = data.allDatoCmsSmartweararticle.edges;

  return (
    <CategoryLayout title="Smart Wear" dates={dates} />
  )
}

export default SmartPage;
