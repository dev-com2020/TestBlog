import React from 'react';
import { uuid } from 'uuidv4';
import { graphql, useStaticQuery } from 'gatsby';
import { slugify } from '../../hooks/Slugify';
import '../../assets/fontAwesome/FontAwesome'
import Avatar from '../Avatar/Avatar';
import { Link } from 'gatsby';

import {
  Image,
  AboutInfo,
  Category,
  CategoryName,
  Headline,
} from './PopularStyles'

const PopularQuery = () => {
  const data = useStaticQuery(graphql`
query PopularQuery {
  allDatoCmsComputerarticle(sort:{fields: meta___createdAt, order:DESC},filter:{locale:{eq:"pl"}}) {
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
  allDatoCmsGamearticle(sort:{fields: meta___createdAt, order:DESC},filter:{locale:{eq:"pl"}}) {
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
  allDatoCmsHomearticle(sort:{fields: meta___createdAt, order:DESC},filter:{locale:{eq:"pl"}}) {
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
  allDatoCmsMobilearticle(sort:{fields: meta___createdAt, order:DESC},filter:{locale:{eq:"pl"}}) {
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
  allDatoCmsSmartweararticle(sort:{fields: meta___createdAt, order:DESC},filter:{locale:{eq:"pl"}}) {
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

  let renderArray = [];
  for (let i = 0; i <= 2; i++) {
    const randomInt = Math.floor(Math.random() * queryArray.length);
    let randomQuery = queryArray[randomInt];
    renderArray.push(randomQuery)
  }

  const RenderArticle = (mainPhoto, category, title, thumbnail, data, author,) => {
    return (
      <div
        className="popular"
        key={uuid()}
      >
        <Image
          src={mainPhoto}
          as={Link}
          to={`/${slugify(category)}/${slugify(title)}`}>
        </Image>
        <AboutInfo>
          <Category>
            <CategoryName>{category}</CategoryName>
          </Category>
          <Headline
            as={Link}
            to={`/${slugify(category)}/${slugify(title)}`}>
            {title.slice(0, 23) + "..."}
          </Headline>
          <Avatar
            isCenter
            isPopular
            picture={thumbnail}
            date={data}
            name={author}
          />
        </AboutInfo>
      </div>
    )
  }
  return (
    <>
      {renderArray.map(post =>
        RenderArticle(post.mainPhoto.url, post.articleCategory, post.articleTitle, post.thumbnail.url, post.meta.createdAt, post.author)
      )}
    </>
  );
}

export default PopularQuery;