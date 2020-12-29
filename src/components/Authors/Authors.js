import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Newsletter from '../Newsletter/Newsletter';
import IsMobileHook from '../../hooks/IsMobileHook';
import { Line } from '../Line/Line';

import {
  StyledWrapper,
  Image,
  Heading,
  PreHeading,
} from './AuthorsStyles';
const Authors = () => {
  const data = useStaticQuery(graphql`
  query adImage  {
    image: file(relativePath: {eq: "ad.jpg"}) {
      id
      childImageSharp{
        fixed(
            width: 350){
         ...GatsbyImageSharpFixed
        }
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `);
  const [isMobile, setIsMobile] = useState(false);
  IsMobileHook(setIsMobile, 1650);
  return (
    <StyledWrapper>
      {console.log(data)}
      <PreHeading>Reklama</PreHeading>
      <Line />
      <Image fixed={data.image.childImageSharp.fixed}></Image>
      <Heading>Miejsce na twoją reklamę!</Heading>
      <PreHeading>Opis reklamy, odnośniki / Lub na całej powierzchni grafika reklamowa</PreHeading>
      {isMobile ? null : <Newsletter />}
    </StyledWrapper>);
}

export default Authors;