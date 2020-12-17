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
const ArticlePreview = ({ image, category, heading, name, date, picture, slug, main, index, excerpt, theme, lattest }) => {
    return (
        <StyledArticle main={main} as={Link} to={slug}>
            {console.log(image)}
            <StyledImg fluid={image} main={main} index={index} />
            <StyledArticleTexts theme={theme} main={main} lattest={lattest}>
                <StyledParagraph >{category}</StyledParagraph>
                <StyledHeading >{heading}</StyledHeading>
                <StyledExcerpt >{excerpt}</StyledExcerpt>
                <StyledAvatar name={name} date={date} picture={picture} />
            </StyledArticleTexts>
        </StyledArticle>
    );
}

export default ArticlePreview;