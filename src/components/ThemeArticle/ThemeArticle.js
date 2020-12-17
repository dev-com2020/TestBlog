import React from 'react';
import {
    StyledWrapper,
    StyledHeading
} from './ThemeArticleStyles';
import ThemeQuery from './ThemeArticleQuery';
import { Line } from '../Line/Line';

const ThemeArticle = () => {

    return (
        <>
            <StyledHeading>RECENZJE:</StyledHeading>
            <Line />
            <StyledWrapper>
                <ThemeQuery />
            </StyledWrapper>
        </>
    );
}

export default ThemeArticle;