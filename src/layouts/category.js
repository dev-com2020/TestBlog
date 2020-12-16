import React, { useState } from 'react';
import { uuid } from 'uuidv4';
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
const StyledButton = styled.p`
font-size: 3rem;
font-weight:bold;
justify-self:center;
cursor:pointer;
`;
const CategoryLayout = ({ dates, title }) => {
    const [articleCount, setArticleCount] = useState(1);
    const items = [];
    const render = number => {
        for (let i = 0; i <= number; i++) {
            let info = dates[i].node;
            items.push(info);
        }
    }
    const handleButtonClick = () => {
        let number = articleCount
        if (dates.length - number >= 3) {
            setArticleCount(number + 3)
        }
        else if (dates.length - number >= 2) {
            setArticleCount(number + 2)
        }
        else if (dates.length - number >= 1) {
            setArticleCount(number + 1);
        }
    }
    return (
        <MainLayout isBaner>
            <StyledHeading>{title}</StyledHeading>
            <Line />
            <StyledArticlesWrapper>
                {render(articleCount - 1)}
                {items.map(info => {
                    return (
                        <ArticlePreview
                            key={uuid()}
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
                {articleCount < dates.length ?
                    <StyledButton
                        onClick={handleButtonClick}>
                        Więcej
                    </StyledButton>
                    : null}
            </StyledArticlesWrapper>
            <Headline>PROPOZYCJE:</Headline>
            <Line />
            <StyledPopularWrapper>
                <Popular />
            </StyledPopularWrapper>
        </MainLayout>
    );
}
export default CategoryLayout;