import React from 'react';
import styled from 'styled-components';
import { Line } from '../Line/Line';
import ComputerImg from '../../assets/img/computer-bg.png';
import MobileImg from '../../assets/img/mobile-bg.png';
import SmartImg from '../../assets/img/smart-bg.png';
import HomeImg from '../../assets/img/home-bg.png';
import GameImg from '../../assets/img/game-bg.png';


const StyledWrapper = styled.div`
width:100%;
display:flex;
justify-content:space-between;
margin-top: 25px;
`;
const StyledHeading = styled.h2`
font-size: 2rem;
font-weight: 700;
`;
const StyledImage = styled.div`
height:266px;
width:261px;
background: linear-gradient(#0b112aa8,#0b112aa8),url(${({ src }) => src});
`;

const Categories = () => {
    return (
        <>
            <StyledHeading>KATEGORIE:</StyledHeading>
            <Line />
            <StyledWrapper>
                <StyledImage src={ComputerImg} />
                <StyledImage src={MobileImg} />
                <StyledImage src={SmartImg} />
                <StyledImage src={HomeImg} />
                <StyledImage src={GameImg} />
            </StyledWrapper>
        </>
    );
}

export default Categories;