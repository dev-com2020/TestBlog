import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Newsletter from '../Newsletter/Newsletter';
import IsMobileHook from '../../hooks/IsMobileHook';
import { Line } from '../Line/Line';

import {
  StyledWrapper,
  StyledHeading,
  StyledImg,
  StyledParagraph,
} from './AuthorsStyles';
const Authors = () => {
  const data = useStaticQuery(graphql`
    query Authors {
        allDatoCmsAboutt {
          edges {
            node {
              authorName
              authorDescription
              authorPicture {
                fluid {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
      }
    `);
  const { authorName, authorDescription, authorPicture } = data.allDatoCmsAboutt.edges[0].node;
  const [isMobile, setIsMobile] = useState(false);
  IsMobileHook(setIsMobile, 1650);
  return (
    <StyledWrapper>
      <StyledHeading>
        O naszych twórcach <span role="img" aria-label="happy emoji">😄</span>
      </StyledHeading>
      <Line />
      <StyledImg
        fluid={authorPicture.fluid}
        alt={authorName}
      />
      <StyledHeading>{authorName}</StyledHeading>
      <StyledParagraph>{authorDescription}.</StyledParagraph>
      {isMobile ? null : <Newsletter />}
    </StyledWrapper>);
}

export default Authors;