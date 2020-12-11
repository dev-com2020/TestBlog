import * as React from "react"
import CategoryLayout from '../layouts/category';
import { graphql } from 'gatsby';

export const query = graphql`
query HomeInfo {
    allDatoCmsHomearticle(filter:{locale:{eq:"pl"}}) {
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
    const dates = data.allDatoCmsHomearticle.edges;

    return (
        <CategoryLayout title="Dom" dates={dates}>
        </CategoryLayout>
    )
}

export default IndexPage
