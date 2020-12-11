import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ArticleTemplate from '../../layouts/Article/ArticleTemplate';


const MobileArticle = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
        allDatoCmsHomearticle {
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
  const dates = data.allDatoCmsHomearticle.edges[0].node;
  return (
    <ArticleTemplate
      title={dates.articleTitle}
      category="DOM"
      mainPhoto={dates.mainPhoto.url}
      name="Imie i nazwisko"
      date="11.12.2020r"
      content={dates.articleContent}
      tags={dates.articleTag}
    />
  );
}

export default MobileArticle;