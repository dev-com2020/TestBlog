import React from 'react';
import styled from 'styled-components';
import MainLayout from './index';
import { Line } from '../components/Line/Line';
import Article from '../components/Article/Article';

const StyledHeading = styled.h2`
font-size:7.1rem;
font-weight:bold;
color:#0B122D;
text-transform:uppercase;
`;
const StyledArticlesWrapper = styled.div`
width:80vw;
margin:100px auto 0;
display:grid;
grid-template-rows: 1fr;
grid-gap: 50px;
`;

const CategoryLayout = ({ title }) => {
    return (
        <MainLayout isBaner isCategory>
            <StyledHeading>{title}</StyledHeading>
            <Line />
            <StyledArticlesWrapper>
                <Article />
                <Article />
                <Article />
                <Article />
            </StyledArticlesWrapper>
        </MainLayout>
    );
}
export default CategoryLayout;