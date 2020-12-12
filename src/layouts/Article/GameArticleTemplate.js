import React from 'react';
import { graphql } from 'gatsby';
import ArticleView from '../../components/Article/ArticleView';

export const query = graphql`
query GamesQuery($id: String!) {
    datoCmsGamearticle(id: {eq: $id}) {
      articleTitle
      articleCategory
      articleTag
      author
      articleTag
      id
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
  const dates = data.datoCmsGamearticle;
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
    />
  );
}

export default ArticleTemplate;