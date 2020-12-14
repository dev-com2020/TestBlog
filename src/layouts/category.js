import React from 'react';
import styled from 'styled-components';
import MainLayout from './index';
import Line from '../components/Line/Line';
import ArticlePreview from '../components/ArticlePreview/ArticlePreview';
import { slugify } from '../hooks/Slugify';
import Popular from '../components/Popular/Popular';


const StyledHeading = styled.h2`
font-size:7.1rem;
font-weight:bold;
text-transform:uppercase;
@media(max-width:1024px) {
    font-size:4rem;
}
`;
const StyledArticlesWrapper = styled.div`
width:80vw;
margin:100px auto 0;
display:grid;
grid-template-rows: 1fr;
grid-gap: 50px;
`;
const Headline = styled.h2`
padding-top: 2rem;
font-size: 20px;
font-weight: bold;
justify-self: left;
`

const StyledPopularWrapper = styled.div`
display:flex;
justify-content:space-between;
@media(max-width: 1366px) {
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
`;
const CategoryLayout = ({ children, dates, title }) => {
    const items = [];
    const render = number => {
        for (let i = 0; i <= number; i++) {
            let info = dates[i].node;
            items.push(info);
        }
    }
    return (
        <MainLayout isBaner>
            <StyledHeading>{title}</StyledHeading>
            <Line />
            <StyledArticlesWrapper>
                {render(dates.length - 1)}
                {items.map(info => {
                    return (
                        <ArticlePreview
                            key={info.thumbnail.url}
                            excerpt={info.excerpt}
                            title={info.articleCategory}
                            image={info.mainPhoto.url}
                            category={info.articleCategory}
                            heading={info.articleTitle}
                            name={info.author}
                            date={info.meta.createdAt}
                            picture={info.thumbnail.url}
                            slug={`${slugify(info.articleTitle)}`}
                        />
                    )
                }
                )}
            </StyledArticlesWrapper>
            <Headline>Popularne:</Headline>
            <Line />
            <StyledPopularWrapper>
                <Popular />
            </StyledPopularWrapper>
        </MainLayout>
    );
}
export default CategoryLayout;