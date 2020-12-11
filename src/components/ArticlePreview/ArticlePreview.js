import React from 'react';
import { Link } from 'gatsby';
import {
    StyledArticleTexts,
    StyledParagraph,
    StyledHeading,
    StyledImg,
    StyledAvatar,
    StyledArticle
} from './ArticlePreviewStyles';

const ArticlePreview = ({ image, category, heading, name, date, picture = { picture }, slug }) => {
    return (
        <StyledArticle>
            <StyledImg src={image} alt="" />
            <StyledArticleTexts as={Link} to={slug}>
                <StyledParagraph>{category}</StyledParagraph>
                <StyledHeading>{heading}</StyledHeading>
                <StyledAvatar name={name} date={date} picture={picture} />
            </StyledArticleTexts>
        </StyledArticle>
    );
}

export default ArticlePreview;