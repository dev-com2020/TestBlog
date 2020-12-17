import React, { useState } from 'react';
import Navigation from '../components/Navigation/DesktopNavigation/DesktopNavigation';
import MobileNavigation from '../components/Navigation/MobileNavigation/MobileNavigation';
import GlobalStyle from '../assets/styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components';
import Categories from '../components/Categories/Categories';
import Baner from '../components/Baner/Baner';
import IsMobileHook from '../hooks/IsMobileHook';
import Footer from '../components/Footer/Footer';
import useTheme from './useTheme';

const StyledWrapper = styled.div`
width:80vw;
margin: 80px auto auto;
`;

const MainLayout = ({ children, isBaner, isCategory }) => {
    const theme = useTheme();
    const [isMobile, setIsMobile] = useState(null);
    IsMobileHook(setIsMobile, 1076);

    const BanerChecked = (isBaner) => {
        if (!isMobile) {
            if (isBaner) {
                return <Baner />
            }
        } else return null;
    }
    const CategoryChecked = (isCategory) => {
        if (isCategory) {
            return <Categories />
        } else return null;
    }
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {isMobile ? <MobileNavigation /> : <Navigation />}
            {BanerChecked(isBaner)}
            <StyledWrapper>
                {CategoryChecked(isCategory)}
                {children}
            </StyledWrapper>
            <Footer />
        </ThemeProvider>
    );
}



export default MainLayout;