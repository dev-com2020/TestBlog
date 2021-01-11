import React, { useState } from 'react';
import Newsletter from '../Newsletter/Newsletter';
import IsMobileHook from '../../hooks/IsMobileHook';
import { Line } from '../Line/Line';
import { useStaticQuery, graphql } from 'gatsby';
import test from '../../assets/img/AdPic.png';
import {
  StyledWrapper,
  Image,
  Heading,
  PreHeading,
} from './AdsStyles';


const Ads = () => {
  const [isMobile, setIsMobile] = useState(false);
  IsMobileHook(setIsMobile, 1650);
  return (
    <StyledWrapper>
      <PreHeading>Reklama</PreHeading>
      <Line />
      <Heading>Miejsce na twoją reklamę!</Heading>
      <PreHeading><img src={test} alt="reklama" /></PreHeading>
      {isMobile ? null : <Newsletter />}
    </StyledWrapper>);
}

export default Ads;