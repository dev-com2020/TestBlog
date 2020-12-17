import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import {
    StyledArticleTexts,
    StyledParagraph,
    StyledHeading,
    StyledImg,
    StyledAvatar,
    StyledArticle,
    StyledExcerpt
} from './ArticlePreviewStyles';
import styled from 'styled-components';
const ArticlePreview = ({ image, category, heading, name, date, picture, slug, main, index, excerpt, theme }) => {
    return (
        <StyledArticle main={main} as={Link} to={slug}>
            {console.log(image)}
            <StyledImg fluid={image} main={main} index={index} />
            <StyledArticleTexts theme={theme} main={main}>
                <StyledParagraph >{category}</StyledParagraph>
                <StyledHeading >{heading}</StyledHeading>
                <StyledExcerpt >{excerpt}</StyledExcerpt>
                <StyledAvatar name={name} date={date} picture={picture} />
            </StyledArticleTexts>
        </StyledArticle>
    );
}

export default ArticlePreview;