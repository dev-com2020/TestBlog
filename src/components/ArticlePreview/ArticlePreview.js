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
const ArticlePreview = ({ mainPhoto, articleCategory, articleTitle, author, meta, thumbnail, slug, main, index, excerpt, theme, lattest }) => {
    return (
        <StyledArticle main={main} as={Link} to={slug}>
            <StyledImg fluid={mainPhoto.fluid} main={main} index={index} alt={articleCategory} />
            <StyledArticleTexts theme={theme} main={main} lattest={lattest}>
                <StyledParagraph >{articleCategory}</StyledParagraph>
                <StyledHeading >{articleTitle}</StyledHeading>
                <StyledExcerpt >{excerpt}</StyledExcerpt>
                <StyledAvatar name={author} date={meta.createdAt} picture={thumbnail.url} />
            </StyledArticleTexts>
        </StyledArticle>
    );
}

export default ArticlePreview;