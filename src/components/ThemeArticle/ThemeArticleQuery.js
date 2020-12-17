import React from 'react';
import { uuid } from 'uuidv4';
import { graphql, useStaticQuery } from 'gatsby';
import { slugify } from '../../hooks/Slugify';
import ArticlePreview from '../ArticlePreview/ArticlePreview';

const ThemeQuery = () => {
  const data = useStaticQuery(graphql`
query ThemeArticleQuery {
  allDatoCmsComputerarticle(sort: {fields: meta___createdAt, order: DESC},filter:{locale:{eq:"pl"}}) {
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
          createdAt(formatString:"MM.DD.YYYY")
        }
        mainPhoto {
          fluid(maxWidth: 1000, maxHeight:800) {
            ...GatsbyDatoCmsFluid
          }
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
  allDatoCmsGamearticle(sort: {fields: meta___createdAt, order: DESC},filter:{locale:{eq:"pl"}}) {
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
          createdAt(formatString:"MM.DD.YYYY")
        }
        mainPhoto {
          fluid(maxWidth: 1000, maxHeight:800) {
            ...GatsbyDatoCmsFluid
          }
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
  allDatoCmsHomearticle(sort: {fields: meta___createdAt, order: DESC},filter:{locale:{eq:"pl"}}) {
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
          createdAt(formatString:"MM.DD.YYYY")
        }
        mainPhoto {
          fluid(maxWidth: 1000, maxHeight:800) {
            ...GatsbyDatoCmsFluid
          }
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
  allDatoCmsMobilearticle(sort: {fields: meta___createdAt, order: DESC},filter:{locale:{eq:"pl"}}) {
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
          createdAt(formatString:"MM.DD.YYYY")
        }
        mainPhoto {
          fluid(maxWidth: 1000, maxHeight:800) {
            ...GatsbyDatoCmsFluid
          }
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
  allDatoCmsSmartweararticle(sort: {fields: meta___createdAt, order: DESC},filter:{locale:{eq:"pl"}}) {
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
          createdAt(formatString:"MM.DD.YYYY")
        }
        mainPhoto {
          fluid(maxWidth: 1000, maxHeight:800) {
            ...GatsbyDatoCmsFluid
          }
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
  const renderArticles = [];
  for (let i = 0; i <= 4; i++) {
    let info = filteredQueryArray[i];
    renderArticles.push(info)
  }
  return (
    <>
      {renderArticles.map(post =>
        <ArticlePreview
          theme
          main
          key={uuid()}
          excerpt={post.excerpt}
          title={post.articleCategory}
          image={post.mainPhoto.fluid}
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
