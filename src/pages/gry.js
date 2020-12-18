import * as React from "react"
import CategoryLayout from '../layouts/category';
import { graphql } from 'gatsby';

export const query = graphql`
query GameInfo {
    allDatoCmsGamearticle(sort:{fields: meta___createdAt, order:DESC},filter:{locale:{eq:"pl"}}) {
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

const GamePage = ({ data }) => {
  const dates = data.allDatoCmsGamearticle.edges;

  return (
    <CategoryLayout title='Gry' dates={dates} />
  )
}

export default GamePage;
