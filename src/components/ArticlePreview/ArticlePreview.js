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

const ArticlePreview = ({ image, category, heading, name, date, picture, slug, isMain, pageContext }) => {
    return (
        <StyledArticle isMain={isMain}>
        {console.log(pageContext)}
            <StyledImg as={Link} to={slug} src={image} isMain={isMain} />
            <StyledArticleTexts>
                <StyledParagraph >{category}</StyledParagraph>
                <StyledHeading as={Link} to={slug}>{heading}</StyledHeading>
                <StyledAvatar name={name} date={date} picture={picture} />
            </StyledArticleTexts>
        </StyledArticle>
    );
}

export default ArticlePreview;