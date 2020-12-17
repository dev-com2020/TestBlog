import React from 'react';
import { graphql } from 'gatsby';
import ArticleView from '../../components/Article/ArticleView';

export const query = graphql`
query MobilesQuery($id: String!) {
    datoCmsMobilearticle(id: {eq: $id}) {
      articleTitle
      articleCategory
      articleTag
      id
      author
      articleTag
      thumbnail {
        url
      }
      meta {
        createdAt(formatString:"MM.DD.YYYY")
      }
      mainPhoto {
        fluid {
          ...GatsbyDatoCmsFluid
        }
       }
      articleContent {
        ... on DatoCmsArticleHeading {
          heading
        }
        ... on DatoCmsArticlePicture {
          picture {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        ... on DatoCmsArticleParagraph {
          paragraph
        }
      }
    }
  }
`;

const ArticleTemplate = ({ data }) => {
  const dates = data.datoCmsMobilearticle;
  return (
    <ArticleView
      title={dates.articleTitle}
      category={dates.articleCategory}
      mainPhoto={dates.mainPhoto.fluid}
      author={dates.author}
      date={dates.meta.createdAt}
      thumbnail={dates.thumbnail.url}
      content={dates.articleContent}
      id={dates.id}
      tags={dates.articleTag}
    />
  );
}

export default ArticleTemplate;