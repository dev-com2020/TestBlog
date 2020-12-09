import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/DesktopNavigation/DesktopNavigation';
import MobileNavigation from '../components/Navigation/MobileNavigation/MobileNavigation';
import GlobalStyle from '../assets/styles/globalStyles';
import styled from 'styled-components';
import Categories from '../components/Categories/Categories';
import Baner from '../components/Baner/Baner';


const StyledWrapper = styled.div`
width:80vw;
margin: 80px auto auto;
`;


const MainLayout = ({ children, isBaner, isCategory }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 1076) setIsMobile(true);
        function handleResize() {
            if (window.innerWidth < 1076) setIsMobile(true);
            else setIsMobile(false);
        }
        window.addEventListener('resize', handleResize);
    })

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
        <>
            <GlobalStyle />
            {isMobile ? <MobileNavigation /> : <Navigation />}
            {BanerChecked(isBaner)}
            <StyledWrapper>
                {CategoryChecked(isCategory)}
                {children}
            </StyledWrapper>
        </>
    );
}



export default MainLayout;