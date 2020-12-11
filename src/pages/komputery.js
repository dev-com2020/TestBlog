import React, { useEffect, useState } from "react"
import CategoryLayout from '../layouts/category';
import { graphql } from 'gatsby';
// import ArticlePreview from '../components/ArticlePreview/ArticlePreview';

export const query = graphql`
query ComputerInfo {
    allDatoCmsComputerarticle(filter:{locale:{eq:"pl"}}) {
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
  const dates = data.allDatoCmsComputerarticle.edges;
  return (
    <CategoryLayout title={dates[0].node.articleCategory} dates={dates}>
      {/* <button onClick={handleClick}>DODAJ</button> */}
    </CategoryLayout>
  )
}

export default IndexPage
