import * as React from "react"
import CategoryLayout from '../layouts/category';
import { graphql } from 'gatsby';

export const query = graphql`
query GameInfo {
    allDatoCmsGamearticle(filter:{locale:{eq:"pl"}}) {
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
    const dates = data.allDatoCmsGamearticle.edges;

    return (
        <CategoryLayout title='Gry' dates={dates}>
            Gry
        </CategoryLayout>
    )
}

export default IndexPage
