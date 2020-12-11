import * as React from "react"
import CategoryLayout from '../layouts/category';
import { graphql } from 'gatsby';

export const query = graphql`
query SmartInfo {
    allDatoCmsSmartweararticle(filter:{locale:{eq:"pl"}}) {
      edges {
        node {
          author
          mainPhoto {
            url
          }
          meta {
              createdAt(formatString:"MM.DD.YYYY")
          }
          thumbnail {
              url
          }
          articleTitle
          articleCategory
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
    const dates = data.allDatoCmsSmartweararticle.edges;

    return (
        <CategoryLayout title="Smart Wear" dates={dates}>
            Smart-wear
        </CategoryLayout>
    )
}

export default IndexPage
