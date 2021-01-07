import React, { useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);
  IsMobileHook(setIsMobile, 1650);
  return (
    <StyledWrapper>
      <PreHeading>Reklama</PreHeading>
      <Line />
      <Heading>Miejsce na twoją reklamę!</Heading>
      <PreHeading>Opis reklamy, odnośniki / Lub na całej powierzchni grafika reklamowa</PreHeading>
      {isMobile ? null : <Newsletter />}
    </StyledWrapper>);
}

export default Authors;