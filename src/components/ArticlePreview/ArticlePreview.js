import React from 'react';
import { Link } from 'gatsby';
import {
    StyledArticleTexts,
    StyledParagraph,
    StyledHeading,
    StyledImg,
    StyledAvatar,
    StyledArticle,
    StyledExcerpt
} from './ArticlePreviewStyles';

const ArticlePreview = ({ image, category, heading, name, date, picture, slug, main, index, excerpt }) => {
    return (
        <StyledArticle main={main}>
            <StyledImg as={Link} to={slug} src={image} main={main} index={index} />
            <StyledArticleTexts>
                <StyledParagraph >{category}</StyledParagraph>
                <StyledHeading as={Link} to={slug}>{heading}</StyledHeading>
                <StyledExcerpt as={Link} to={slug}>{excerpt}</StyledExcerpt>
                <StyledAvatar name={name} date={date} picture={picture} />
            </StyledArticleTexts>
        </StyledArticle>
    );
}

export default ArticlePreview;