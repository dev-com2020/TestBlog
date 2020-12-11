import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ArticleTemplate from '../../layouts/Article/ArticleTemplate';

const MobileArticle = () => {
  const data = useStaticQuery(graphql`
    query SmartQuery {
        allDatoCmsSmartweararticle {
          edges {
            node {
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
              articleTag
              articleTitle
              mainPhoto {
                  url
              }
            }
          }
        }
      }
    `);
  const dates = data.allDatoCmsSmartweararticle.edges[0].node;
  return (
    <ArticleTemplate
      title={dates.articleTitle}
      category="SMART-WEAR"
      mainPhoto={dates.mainPhoto.url}
      name="Imie i nazwisko"
      date="11.12.2020r"
      content={dates.articleContent}
      tags={dates.articleTag}
    />
  );
}

export default MobileArticle;