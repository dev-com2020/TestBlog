import React from 'react';
import styled from 'styled-components';
import Line from '../Line/Line';
import { graphql, useStaticQuery } from 'gatsby';
import ArticlePreview from '../ArticlePreview/ArticlePreview';

const StyledHeading = styled.h2`
font-size: 2rem;
font-weight:700;
`;
const StyledWrapper = styled.div`
display:flex;
flex-direction:column;
width:80%;
margin-right:100px;
/* grid-gap: 20px; */
`;
const ArticlePreviewWrapper = styled.div`
margin-top: 50px;
`;
const Lattest = () => {
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
    const slugify = text => {
        return text
            .toLowerCase()
            .replace(/ą/g, 'a')
            .replace(/ć/g, 'c')
            .replace(/ę/g, 'e')
            .replace(/ł/g, 'l')
            .replace(/ń/g, 'n')
            .replace(/ó/g, 'o')
            .replace(/ś/g, 's')
            .replace(/[ź|ż]/g, 'z')
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    }
    return (
        <StyledWrapper>
            <StyledHeading>NAJNOWSZE WPISY:</StyledHeading>
            <Line />
            {categories.map(post => (
                <ArticlePreviewWrapper>
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
                </ArticlePreviewWrapper>
            ))}
        </StyledWrapper>
    );
}

export default Lattest;