import React from "react"
import CategoryLayout from '../layouts/category';
import { graphql } from 'gatsby';
// import ArticlePreview from '../components/ArticlePreview/ArticlePreview';

export const query = graphql`
query ComputerInfo {
    allDatoCmsComputerarticle(sort:{fields: meta___createdAt, order:DESC},filter:{locale:{eq:"pl"}}) {
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

const IndexPage = ({ data }) => {
  const dates = data.allDatoCmsComputerarticle.edges;
  return (
    <CategoryLayout title={dates[0].node.articleCategory} dates={dates}>
      {/* <button onClick={handleClick}>DODAJ</button> */}
    </CategoryLayout>
  )
}

export default IndexPage
