import React from 'react';
import styled from 'styled-components';
import { Line } from '../Line/Line';
import Article from '../Article/Article';

const StyledWrapper = styled.div`
display:grid;
grid-template-rows: 1fr;
grid-gap: 50px;
width:80vw;
overflow:hidden;
`;

const StyledHeading = styled.h2`
font-size: 7.1rem;
font-weight:700;
@media(max-width:1024px) {
    font-size:4rem;
}
`;

const ThemeArticle = () => {
    return (
        <StyledWrapper>
            <StyledHeading>Posty Tematyczne</StyledHeading>
            <Line />
            <Article />
            <Article />
            <Article />
            <Article />
        </StyledWrapper>
    );
}

export default ThemeArticle;