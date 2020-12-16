import React from 'react';
import { graphql } from 'gatsby';
import ArticleView from '../../components/Article/ArticleView';

export const query = graphql`
query HomesQuery($id: String!) {
    datoCmsHomearticle(id: {eq: $id}) {
      articleTitle
      articleCategory
      articleTag
      author
      id
      articleTag
      thumbnail {
        url
      }
      meta {
        createdAt(formatString:"MM.DD.YYYY")
      }
      mainPhoto {
        url
      }
      articleContent {
        ... on DatoCmsArticleHeading {
          heading
        }
        ... on DatoCmsArticlePicture {
          picture {
            url
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
  const dates = data.datoCmsHomearticle;
  return (
    <ArticleView
      title={dates.articleTitle}
      category={dates.articleCategory}
      mainPhoto={dates.mainPhoto.url}
      author={dates.author}
      date={dates.meta.createdAt}
      thumbnail={dates.thumbnail.url}
      content={dates.articleContent}
      tags={dates.articleTag}
      id={dates.id}
    />
  );
}

export default ArticleTemplate;