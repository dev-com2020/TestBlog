import React from 'react';
import styled from 'styled-components';
import {
    StyledWrapper,
    StyledHeading,
} from './LattestStyles';
import LattestQuery from './LattestQuery';
const Line = styled.div`
height:4px;
width:100%;
background-color:lightgray;
border-radius: 4px;
overflow:hidden;
position:relative;
& span {
    position:absolute;
    height:4px;
    width: 5%;
    left:0;
}
`;


const Lattest = () => {
    return (
        <StyledWrapper>
            <StyledHeading>NAJNOWSZE WPISY:</StyledHeading>
            <Line />
            <LattestQuery />
        </StyledWrapper>
    );
}

export default Lattest;