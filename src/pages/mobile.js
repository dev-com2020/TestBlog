import React from "react"
import CategoryLayout from '../layouts/category';
import { graphql } from 'gatsby';

export const query = graphql`
query MobileInfo {
    allDatoCmsMobilearticle(filter:{locale:{eq:"pl"}}) {
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
    const dates = data.allDatoCmsMobilearticle.edges;

    return (
        <CategoryLayout title="Mobile" dates={dates}>
            Mobile
        </CategoryLayout>
    )
}

export default IndexPage
