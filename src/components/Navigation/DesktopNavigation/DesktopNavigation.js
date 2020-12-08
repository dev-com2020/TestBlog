import React from 'react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import {
    StyledList,
    StyledItem,
    StyledLink,
    StyledSearch,
    StyledSearchLink,
    StyledNav,
} from './DesktopNavigationStyles';

const Navigation = () => {

    return (
        <>
            <StyledNav>
                <ThemeSwitcher />
                <StyledList>
                    <StyledItem>
                        <StyledLink
                            to='/'
                            activeClassName="active"
                        >HOME</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink
                            to='/komputery'
                            activeClassName="active"
                        >KOMPUTERY</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink
                            to='/mobile'
                            activeClassName="active"
                        >MOBILE</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink
                            to='/smart-wear'
                            activeClassName="active"
                        >SMART WEAR</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink
                            to='/dom'
                            activeClassName="active"
                        >DOM</StyledLink>
                    </StyledItem>
                    <StyledItem>
                        <StyledLink
                            to='/gry'
                            activeClassName="active"
                        >GRY</StyledLink>
                    </StyledItem>
                    <StyledSearchLink
                        to='/search'
                        activeClassName="active"
                    >Szukaj<StyledSearch /></StyledSearchLink>
                </StyledList>
            </StyledNav>
        </>
    );
}

export default Navigation;