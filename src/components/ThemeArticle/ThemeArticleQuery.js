import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { slugify } from '../../hooks/Slugify';
import ArticlePreview from '../ArticlePreview/ArticlePreview';

const ThemeQuery = () => {
    const data = useStaticQuery(graphql`
query ThemeArticleQuery {
  allDatoCmsComputerarticle(filter:{locale:{eq:"pl"}}) {
    edges {
      node {
              excerpt
              articleTitle
        articleCategory
        articleTag
        author
        thumbnail {
          url
        }
        meta {
          createdAt(formatString:"MM:HH - MM.DD.YYYY")
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
  }
  allDatoCmsGamearticle(filter:{locale:{eq:"pl"}}) {
    edges {
      node {
              excerpt
              articleTitle
        articleCategory
        articleTag
        author
        thumbnail {
          url
        }
        meta {
          createdAt(formatString:"MM:HH - MM.DD.YYYY")
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
  }
  allDatoCmsHomearticle(filter:{locale:{eq:"pl"}}) {
    edges {
      node {
              excerpt
              articleTitle
        articleCategory
        articleTag
        author
        thumbnail {
          url
        }
        meta {
          createdAt(formatString:"MM:HH - MM.DD.YYYY")
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
  }
  allDatoCmsMobilearticle(filter:{locale:{eq:"pl"}}) {
    edges {
      node {
              excerpt
              articleTitle
        articleCategory
        articleTag
        author
        thumbnail {
          url
        }
        meta {
          createdAt(formatString:"MM:HH - MM.DD.YYYY")
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
  }
  allDatoCmsSmartweararticle(filter:{locale:{eq:"pl"}}) {
    edges {
      node {
              excerpt
              articleTitle
        articleCategory
        articleTag
        author
        thumbnail {
          url
        }
        meta {
          createdAt(formatString:"MM:HH - MM.DD.YYYY")
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
  }
}
`);
    const queryArray = [];
    const queries = () => {
        data.allDatoCmsComputerarticle.edges.forEach(item => queryArray.push(item.node));
        data.allDatoCmsMobilearticle.edges.forEach(item => queryArray.push(item.node));
        data.allDatoCmsHomearticle.edges.forEach(item => queryArray.push(item.node));
        data.allDatoCmsSmartweararticle.edges.forEach(item => queryArray.push(item.node));
        data.allDatoCmsGamearticle.edges.forEach(item => queryArray.push(item.node));
    };
    queries();
    const filteredQueryArray = queryArray.filter(item => item.articleTag.includes("recenzja"));
    return (
        <>
            {filteredQueryArray.map(post =>
                <ArticlePreview
                    main
                    theme
                    key={post.thumbnail.url}
                    excerpt={post.excerpt}
                    title={post.articleCategory}
                    image={post.mainPhoto.url}
                    category={post.articleCategory}
                    heading={post.articleTitle}
                    name={post.author}
                    date={post.meta.createdAt}
                    picture={post.thumbnail.url}
                    slug={`/${slugify(post.articleCategory)}/${slugify(post.articleTitle)}`}
                />
            )}
        </>
    );
}

export default ThemeQuery;
