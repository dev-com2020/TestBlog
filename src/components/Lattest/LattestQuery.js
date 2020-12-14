import React from 'react';
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
                  url
              }
              meta {
                createdAt(formatString:"MM:HH - MM.DD.YYYY")
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
                    url
                }
                meta {
                    createdAt(formatString:"MM:HH - MM.DD.YYYY")
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
                    url
                }
                meta {
                    createdAt(formatString:"MM:HH - MM.DD.YYYY")
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
                    url
                }
                meta {
                    createdAt(formatString:"MM:HH - MM.DD.YYYY")
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
                    url
                }
                meta {
                    createdAt(formatString:"MM:HH - MM.DD.YYYY")
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
                        main
                        index
                        excerpt={post.excerpt}
                        key={Math.floor(Math.random() * 590590590)}
                        title={post.articleCategory}
                        image={post.mainPhoto.url}
                        category={post.articleCategory}
                        heading={post.articleTitle}
                        name={post.author}
                        date={post.meta.createdAt}
                        picture={post.thumbnail.url}
                        slug={`${slugify(post.articleCategory)}/${slugify(post.articleTitle)}`}
                    />
                </>
            ))}
        </ArticlePreviewWrapper>
    )
}
export default LattestQuery;