import React from 'react';
import Line from '../Line/Line';
import {
    StyledWrapper,
    StyledHeading,
} from './LattestStyles';
import LattestQuery from './LattestQuery';

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