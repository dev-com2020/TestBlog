import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { slugify } from '../../hooks/Slugify';
import Social from '../Social/Social'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../assets/fontAwesome/FontAwesome'
import Avatar from '../Avatar/Avatar';
import { Link } from 'gatsby';

import {
    Image,
    AboutInfo,
    Category,
    CategoryName,
    Favorite,
    Headline,
    AuthorInfo
} from './PopularStyles'

const PopularQuery = () => {
    const data = useStaticQuery(graphql`
query PopularQuery {
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
                <div className="popular">
                    <Image src={post.mainPhoto.url} as={Link} to={`/${slugify(post.articleCategory)}/${slugify(post.articleTitle)}`}>
                        <Social />
                    </Image>
                    <AboutInfo>
                        <Category>
                            <CategoryName>{post.articleCategory}</CategoryName>
                            <Favorite>
                                <span>12</span>
                                <FontAwesomeIcon icon={'heart'} className='icon' color="gray" />
                            </Favorite>
                        </Category>
                        <Headline as={Link} to={`/${slugify(post.articleCategory)}/${slugify(post.articleTitle)}`}>{post.articleTitle}</Headline>
                        <Avatar
                            isCenter
                            isPopular
                            picture={post.thumbnail.url}
                            date={post.meta.createdAt}
                            name={post.author}
                        />
                    </AboutInfo>
                </div>
            )}
        </>
    );
}

export default PopularQuery;