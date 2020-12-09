import React from 'react';
import { Link } from 'gatsby';
import { Line } from '../Line/Line';
import ComputerImg from '../../assets/img/komputery.png';
import MobileImg from '../../assets/img/mobile.png';
import SmartImg from '../../assets/img/smart-wear.png';
import HomeImg from '../../assets/img/dom.png';
import GameImg from '../../assets/img/gry.png';
import { graphql, useStaticQuery } from 'gatsby';
import {
    StyledWrapper,
    StyledHeading,
    StyledImage,
    StyledText
} from './CategoriesStyles';

const Categories = () => {
    return (
        <>
            <StyledHeading>KATEGORIE:</StyledHeading>
            <Line />
            <StyledWrapper>
                <StyledImage as={Link} to='/komputery' src={ComputerImg}> <StyledText>Komputery</StyledText> </StyledImage>
                <StyledImage as={Link} to='/mobile' src={MobileImg} > <StyledText>Mobile</StyledText> </StyledImage>
                <StyledImage as={Link} to='/smart-wear' src={SmartImg} > <StyledText>Smart wear</StyledText> </StyledImage>
                <StyledImage as={Link} to='/dom' src={HomeImg} > <StyledText>Dom</StyledText> </StyledImage>
                <StyledImage as={Link} to='/gry' src={GameImg} > <StyledText>Gry</StyledText> </StyledImage>
            </StyledWrapper>
        </>
    );
}

export default Categories;