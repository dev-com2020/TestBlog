import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const StyledWrapper = styled.div`
height: 392px;
width: 100vw;
background-size: cover;
background-repeat: no-repeat;
background-position:left;
@media(min-width:2100px) {
  height: 500px;
}
`;

const Baner = () => {
  const data = useStaticQuery(graphql`
    query Banner {
        file(name:{eq: "Banner"}){
        childImageSharp {
          fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
          }
        }
        }
      }
    `);
  return (
    <StyledWrapper as={BackgroundImage} fluid={data.file.childImageSharp.fluid}>
    </StyledWrapper>
  )
}

export default Baner;