import React, { useState } from 'react';
import {
    StyledNav,
    StyledList,
    StyledListWrapper,
    StyledItem,
    StyledLink,
    StyledImg,
    StyledHeading,
    StyledLogoImg,
    StyledLogoWrapper,
} from './MobileNavigationStyles';
import Burger from '../Burger/Burger';
import Search from '../../../assets/svg/Search.svg';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { graphql, useStaticQuery } from 'gatsby';

const MobileNavigation = () => {
    const data = useStaticQuery(graphql`
        query logoImage  {
            image: file(relativePath: {eq: "LogoFooter.png"}) {
              id
              childImageSharp{
                fluid {
                 ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
        }
    `)
    const [isOpen, setIsOpen] = useState(false);

    const handleBurgerClick = () => {
        if (isOpen) setIsOpen(false);
        else setIsOpen(true);
    }
    const handleLinkClick = () => {
        setIsOpen(false);
    }
    return (
        <>
            <StyledNav>
                <StyledHeading></StyledHeading>
                <Burger handleclick={handleBurgerClick} isOpen={isOpen} />
                <StyledListWrapper open={isOpen}>
                    <StyledList>
                        <StyledItem>
                            <StyledLink
                                activeClassName="active"
                                to='/'
                                onClick={handleLinkClick}>
                                HOME
                        </StyledLink>
                        </StyledItem>
                        <StyledItem>
                            <StyledLink
                                activeClassName="active"
                                to='/komputery'
                                onClick={handleLinkClick}>
                                KOMPUTERY
                            </StyledLink>
                        </StyledItem>
                        <StyledItem>
                            <StyledLink
                                activeClassName="active"
                                to='/mobile'
                                onClick={handleLinkClick}
                            >
                                MOBILE
                            </StyledLink>
                        </StyledItem>
                        <StyledItem>
                            <StyledLink
                                activeClassName="active"
                                to='/smart-wear'
                                onClick={handleLinkClick}
                            >
                                SMART WEAR
                            </StyledLink>
                        </StyledItem>
                        <StyledItem>
                            <StyledLink
                                activeClassName="active"
                                to='/dom'
                                onClick={handleLinkClick}
                            >
                                DOM
                            </StyledLink>
                        </StyledItem>
                        <StyledItem>
                            <StyledLink
                                activeClassName="active"
                                to='/gry'
                                onClick={handleLinkClick}
                            >
                                GRY
                            </StyledLink>
                        </StyledItem>
                        <StyledItem>
                            <StyledLink
                                to='/search'
                                onClick={handleLinkClick}
                            >
                                SZUKAJ <StyledImg src={Search} alt="Search" />
                            </StyledLink>
                        </StyledItem>
                        <ThemeSwitcher />

                    </StyledList>
                </StyledListWrapper>
            </StyledNav >
            <StyledLogoWrapper>
                <StyledLogoImg
                    fluid={data.image.childImageSharp.fluid}
                    src="techblog logo" />
            </StyledLogoWrapper>
        </>
    );
}

export default MobileNavigation;