import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ArticleTemplate from '../../layouts/Article/ArticleTemplate';
import { ArticleLayout } from './ArticleStyles.js';

const ComputerArticle = () => {
  const data = useStaticQuery(graphql`
  query ComputerQuery($id: String!) {
    datoCmsComputerarticle(id: {eq: $id}) {
      articleTitle
      articleCategory
      articleTag
      author
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
    `);
  const dates = data.datoCmsComputerarticle;
  return (
    <ArticleLayout>
      <h2>
        {console.log(dates)}
      </h2>
    </ArticleLayout>
  );
}

export default ComputerArticle;


{/* <ArticleTemplate
title={dates.articleTitle}
category={dates.articleCategory}
mainPhoto={dates.mainPhoto.url}
name={dates.author}
date={dates.meta.createdAt}
picture={dates.thumbnail.url}
content={dates.articleContent}
tags={dates.articleTag}
/> */}

/*
query ArticleQuery {
        allDatoCmsComputerarticle {
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
              articleCategory
              author
              thumbnail {
                url
              }
              meta {
                createdAt(formatString: "MM.DD.YYYY")
              }
              mainPhoto {
                  url
              }
            }
          }
        }
      }
*/