import React from 'react';
import styled from 'styled-components';
import { Line } from '../Line/Line';

const StyledHeading = styled.h2`
font-size: 2rem;
font-weight:700;
color:#0B122D;
`;
const StyledWrapper = styled.div`
display:flex;
flex-direction:column;
width:80%;
margin-right:100px;
`;
const Lattest = () => {
    return (
        <StyledWrapper>
            <StyledHeading>NAJNOWSZE WPISY:</StyledHeading>
            <Line />
            <div>Najnowsze wpisy :D</div>
        </StyledWrapper>
    );
}

export default Lattest;