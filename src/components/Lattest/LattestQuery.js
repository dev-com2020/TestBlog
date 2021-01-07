import React from 'react';
import { uuid } from 'uuidv4';
import { graphql, useStaticQuery } from 'gatsby';
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import { slugify } from '../../hooks/Slugify';
import { ArticlePreviewWrapper } from './LattestStyles';

const LattestQuery = () => {
  const data = useStaticQuery(graphql`
    query Newest {
        allDatoCmsComputerarticle(sort: {fields: meta___createdAt, order: DESC}, filter: {locale: {eq: "pl"}}) {
          edges {
            node {
              author
              excerpt
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
              articleContent {
                  ... on DatoCmsArticleParagraph {
                      paragraph
                  }
              }
            }
          }
        }
        allDatoCmsSmartweararticle(sort: {fields: meta___createdAt, order: DESC}, filter: {locale: {eq: "pl"}}) {
          edges {
            node {
                author
              excerpt
              mainPhoto {
                fluid {
                  ...GatsbyDatoCmsFluid_tracedSVG
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
                articleContent {
                    ... on DatoCmsArticleParagraph {
                        paragraph
                    }
                }
            }
          }
        }
        allDatoCmsMobilearticle(sort: {fields: meta___createdAt, order: DESC}, filter: {locale: {eq: "pl"}}) {
          edges {
            node {
              excerpt
              author
              mainPhoto {
                fluid {
                  ...GatsbyDatoCmsFluid_tracedSVG
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
                articleContent {
                    ... on DatoCmsArticleParagraph {
                        paragraph
                    }
                }
            }
          }
        }
        allDatoCmsHomearticle(sort: {fields: meta___createdAt, order: DESC}, filter: {locale: {eq: "pl"}}) {
          edges {
            node {
              excerpt
              author
              mainPhoto {
                fluid {
                  ...GatsbyDatoCmsFluid_tracedSVG
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
                articleContent {
                    ... on DatoCmsArticleParagraph {
                        paragraph
                    }
                }
            }
          }
        }
        allDatoCmsGamearticle(sort: {fields: meta___createdAt, order: DESC}, filter: {locale: {eq: "pl"}}) {
          edges {
            node {
              excerpt
              author
              mainPhoto {
                fluid {
                  ...GatsbyDatoCmsFluid_tracedSVG
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
                articleContent {
                    ... on DatoCmsArticleParagraph {
                        paragraph
                    }
                }
            }
          }
        }
      }
    `);
  const computer = data.allDatoCmsComputerarticle.edges[0].node;
  const mobile = data.allDatoCmsMobilearticle.edges[0].node;
  const home = data.allDatoCmsHomearticle.edges[0].node;
  const smart = data.allDatoCmsSmartweararticle.edges[0].node;
  const game = data.allDatoCmsGamearticle.edges[0].node;
  const categories = [computer, mobile, smart, home, game];
  return (
    <ArticlePreviewWrapper>
      {categories.map(post => (
        <>
          <ArticlePreview
            index
            main
            lattest
            key={uuid()}
            {...post}
            image={post.mainPhoto}
            slug={`${slugify(post.articleCategory)}/${slugify(post.articleTitle)}`}
          />
        </>
      ))}
    </ArticlePreviewWrapper>
  )
}
export default LattestQuery;