import * as React from "react"
import CategoryLayout from '../layouts/category';
import { graphql } from 'gatsby';

export const query = graphql`
query HomeInfo {
    allDatoCmsHomearticle(sort:{fields: meta___createdAt, order:DESC},filter:{locale:{eq:"pl"}}) {
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

const HomePage = ({ data }) => {
  const dates = data.allDatoCmsHomearticle.edges;

  return (
    <CategoryLayout title="Dom" dates={dates} />
  )
}

export default HomePage;
