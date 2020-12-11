import React from 'react';
import { Line } from '../../components/Line/Line';
import Avatar from '../../components/Avatar/Avatar';
import { Disqus } from 'gatsby-plugin-disqus';

import {
    StyledHeading,
    StyledCategoryHeading,
    StyledImg,
    StyledArticleHeading,
    StyledArticleParagraph,
    StyledArticleImg,
    StyledArticleWrapper,
    StyledTag,
    StyledDisqus,
    ArticleLayout,
} from './ArticleStyles';

const ArticleTemplate = ({ title, category, mainPhoto, name, date, picture, content, tags }) => {
    return (
        <ArticleLayout isCategory>
            <StyledHeading>
                {title}
            </StyledHeading>
            <Line />
            <StyledCategoryHeading>
                {category}
            </StyledCategoryHeading>
            <StyledArticleWrapper>
                <StyledImg src={mainPhoto} />
                <Avatar
                    name={name}
                    date={date}
                    picture={picture}
                    isCenter />
                {content.map(item => {
                    const itemKey = Object.keys(item)[1];
                    switch (itemKey) {
                        case 'heading':
                            return (<StyledArticleHeading>{item.heading}</StyledArticleHeading>)
                        case 'picture':
                            return (<StyledArticleImg src={item.picture.url} />)
                        case 'paragraph':
                            return (<StyledArticleParagraph>{item.paragraph}</StyledArticleParagraph>)
                    }
                })}
                <Line />
                <StyledTag>
                    TAGI:
            {tags}
                </StyledTag>
                <StyledDisqus>
                    <Disqus></Disqus>
                </StyledDisqus>
            </StyledArticleWrapper>
        </ArticleLayout>
    );
}

export default ArticleTemplate;