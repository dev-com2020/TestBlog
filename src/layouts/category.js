import React from 'react';
import styled from 'styled-components';
import MainLayout from './index';
import Line from '../components/Line/Line';
import ArticlePreview from '../components/ArticlePreview/ArticlePreview';

const StyledHeading = styled.h2`
font-size:7.1rem;
font-weight:bold;
color:#0B122D;
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
const slugify = text => {
    return text
        .toLowerCase()
        .replace(/ą/g, 'a')
        .replace(/ć/, 'c')
        .replace(/ę/, 'e')
        .replace(/ł/, 'l')
        .replace(/ń/, 'n')
        .replace(/ó/, 'o')
        .replace(/ś/, 's')
        .replace(/[ź|ż]/, 'z')
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}
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
        </MainLayout>
    );
}
export default CategoryLayout;