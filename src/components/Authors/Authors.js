import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Newsletter from '../Newsletter/Newsletter';
import IsMobileHook from '../../hooks/IsMobileHook';

import {
  StyledWrapper,
  StyledHeading,
  StyledImg,
  StyledParagraph,
} from './AuthorsStyles';
const Line = styled.div`
height:4px;
width:100%;
background-color:lightgray;
border-radius: 4px;
overflow:hidden;
position:relative;
& span {
    position:absolute;
    height:4px;
    width: 5%;
    left:0;
}
`;
const Authors = () => {
  const data = useStaticQuery(graphql`
    query Authors {
        allDatoCmsAboutt {
          edges {
            node {
              authorName
              authorDescription
              authorPicture {
                url
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
        src={authorPicture.url}
        alt="michal test"
      />
      <StyledHeading>{authorName}</StyledHeading>
      <StyledParagraph>{authorDescription}.</StyledParagraph>
      {isMobile ? null : <Newsletter />}
    </StyledWrapper>);
}

export default Authors;