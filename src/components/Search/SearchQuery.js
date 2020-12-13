import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import { ArticlePreviewWrapper } from './SearchStyles';
import { slugify } from '../../hooks/Slugify';

const SearchQuery = ({ searchValue, isSearching }) => {
  const data = useStaticQuery(graphql`
query SearchQuery {
  allDatoCmsComputerarticle(filter:{locale:{eq:"pl"}}) {
    edges {
      node {
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
  }
  allDatoCmsGamearticle(filter:{locale:{eq:"pl"}}) {
    edges {
      node {
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
  }
  allDatoCmsHomearticle(filter:{locale:{eq:"pl"}}) {
    edges {
      node {
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
  }
  allDatoCmsMobilearticle(filter:{locale:{eq:"pl"}}) {
    edges {
      node {
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
  }
  allDatoCmsSmartweararticle(filter:{locale:{eq:"pl"}}) {
    edges {
      node {
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
  }
  queries();
  const filteredQueryArray = queryArray.filter(item => item.articleTitle.toLowerCase().includes(searchValue) || item.articleTag.includes(searchValue.toLowerCase()));
  return (
    <div>
      {isSearching ? filteredQueryArray.map(post =>
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
            slug={`/${slugify(post.articleCategory)}/${slugify(post.articleTitle)}`}
          />
        </ArticlePreviewWrapper>
      ) : null}
    </div>
  )
}

export default SearchQuery;