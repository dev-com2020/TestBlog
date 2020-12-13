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
        allDatoCmsSmartweararticle(sort: {fields: meta___createdAt, order: DESC}, filter: {locale: {eq: "pl"}}) {
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
        allDatoCmsMobilearticle(sort: {fields: meta___createdAt, order: DESC}, filter: {locale: {eq: "pl"}}) {
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
        allDatoCmsHomearticle(sort: {fields: meta___createdAt, order: DESC}, filter: {locale: {eq: "pl"}}) {
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
        allDatoCmsGamearticle(sort: {fields: meta___createdAt, order: DESC}, filter: {locale: {eq: "pl"}}) {
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
    `);
    const computer = data.allDatoCmsComputerarticle.edges[0].node;
    const mobile = data.allDatoCmsMobilearticle.edges[0].node;
    const home = data.allDatoCmsHomearticle.edges[0].node;
    const smart = data.allDatoCmsSmartweararticle.edges[0].node;
    const game = data.allDatoCmsGamearticle.edges[0].node;
    const categories = [computer, mobile, smart, home, game]
    return (
        <ArticlePreviewWrapper>
            {categories.map(post => (
                <ArticlePreview
                    isMain
                    key={post.thumbnail.url}
                    title={post.articleCategory}
                    image={post.mainPhoto.url}
                    category={post.articleCategory}
                    heading={post.articleTitle}
                    name={post.author}
                    date={post.meta.createdAt}
                    picture={post.thumbnail.url}
                    slug={`${slugify(post.articleCategory)}/${slugify(post.articleTitle)}`}
                />
            ))}
        </ArticlePreviewWrapper>
    )
}
export default LattestQuery;