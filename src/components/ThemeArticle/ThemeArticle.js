import React from 'react';
import Line from '../Line/Line';
import {
    StyledWrapper,
    StyledHeading
} from './ThemeArticleStyles';
import ThemeQuery from './ThemeArticleQuery';

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