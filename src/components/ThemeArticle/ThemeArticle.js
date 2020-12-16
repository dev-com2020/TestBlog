import React from 'react';
import styled from 'styled-components'

import {
    StyledWrapper,
    StyledHeading
} from './ThemeArticleStyles';
import ThemeQuery from './ThemeArticleQuery';
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