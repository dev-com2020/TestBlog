import React from 'react';
import {
    StyledWrapper,
    StyledHeading,
} from './LattestStyles';
import LattestQuery from './LattestQuery';
import { Line } from '../Line/Line';



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