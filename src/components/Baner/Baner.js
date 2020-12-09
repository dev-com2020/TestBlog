import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const StyledWrapper = styled.div`
height: 392px;
width: 100vw;
background: url(${({ src }) => src});
`;

const Baner = () => {
    const data = useStaticQuery(graphql`
    query Banner {
        file(name:{eq: "Banner"}){
        childImageSharp {
          fluid(maxWidth:1920, maxHeight:392) {
          ...GatsbyImageSharpFluid
          }
        }
        }
      }
    `);
    return (
        <StyledWrapper as={Image} fluid={data.file.childImageSharp.fluid}>
        </StyledWrapper>
    )
}

export default Baner;