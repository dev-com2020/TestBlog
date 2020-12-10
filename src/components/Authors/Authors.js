import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Line } from '../Line/Line';
import tiktokLogo from '../../assets/svg/tiktok.svg';
import youtubeLogo from '../../assets/svg/youtube.svg';
import linkedinLogo from '../../assets/svg/linkedin.svg';
import facebookLogo from '../../assets/svg/facebook.svg';
import Newsletter from '../Newsletter/Newsletter';
import IsMobileHook from '../../hooks/IsMobileHook';

import {
    StyledWrapper,
    StyledHeading,
    StyledImg,
    StyledParagraph,
    StyledList,
    StyledItem,
    StyledLink,
} from './AuthorsStyles';

const Authors = () => {
    const data = useStaticQuery(graphql`
    query Authors {
        allDatoCmsAbout {
          edges {
            node {
              imieINazwisko
              oAutorze
              zdjecieTworcy {
                url
              }
            }
          }
        }
      }
    `);
    const { zdjecieTworcy, imieINazwisko, oAutorze } = data.allDatoCmsAbout.edges[0].node;
    const [isMobile, setIsMobile] = useState(false);
    IsMobileHook(setIsMobile, 1024);
    return (
        <StyledWrapper>
            <StyledHeading>
                O naszych twórcach <span role="img" aria-label="happy emoji">😄</span>
            </StyledHeading>
            <Line />
            <StyledImg
                src={zdjecieTworcy.url}
                alt="michal test"
            />
            <StyledHeading>{imieINazwisko}</StyledHeading>
            <StyledParagraph>{oAutorze}.</StyledParagraph>
            <StyledList>
                <StyledItem>
                    <StyledLink
                        src={tiktokLogo}
                        href="https://tiktok.com"
                    >
                    </StyledLink>
                </StyledItem>
                <StyledItem>
                    <StyledLink
                        src={youtubeLogo}
                        href="https://youtube.com"
                    >
                    </StyledLink>
                </StyledItem>
                <StyledItem>
                    <StyledLink
                        src={linkedinLogo}
                        href="https://linkedin.com"
                    >
                    </StyledLink>
                </StyledItem>
                <StyledItem>
                    <StyledLink
                        src={facebookLogo}
                        href="https://facebook.com"
                    >
                    </StyledLink>
                </StyledItem>
            </StyledList>
            {isMobile ? null : <Newsletter />}
        </StyledWrapper>);
}

export default Authors;