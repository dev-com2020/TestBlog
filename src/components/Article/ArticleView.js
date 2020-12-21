import React from 'react';
import Avatar from '../Avatar/Avatar';
import { Disqus } from 'gatsby-plugin-disqus';
import Popular from '../Popular/Popular';
import { Line } from '../Line/Line';

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
  StyledPopularWrapper,
  Headline,
} from './ArticleViewStyles';

const ArticleView = ({ title, category, mainPhoto, author, date, thumbnail, content, tags, id }) => {
  let disqusConfig = {
    identifier: id,
    title,
  }
  return (
    <ArticleLayout>
      <StyledHeading>
        {title}
      </StyledHeading>
      <Line />
      <StyledCategoryHeading>
        {category}
      </StyledCategoryHeading>
      <StyledArticleWrapper>
        <StyledImg fluid={mainPhoto} />
        <Avatar
          name={author}
          date={date}
          picture={thumbnail}
          isCenter />
        {content.map(item => {
          const itemKey = Object.keys(item)[1];
          let randomInt = Math.floor(Math.random() * 159159159159);
          switch (itemKey) {
            case 'heading':
              return (<StyledArticleHeading key={randomInt}>{item.heading}</StyledArticleHeading>)
            case 'picture':
              return (<StyledArticleImg key={randomInt} fluid={item.picture.fluid} alt={item.heading} />)
            case 'paragraph':
              return (<StyledArticleParagraph key={randomInt}>{item.paragraph}</StyledArticleParagraph>)
            default:
              return null;
          }
        })}
        <Line />
        <StyledTag>
          TAGI:
          {tags}
        </StyledTag>
        <StyledDisqus>
          <Disqus config={disqusConfig} />
        </StyledDisqus>
      </StyledArticleWrapper>
      <Headline>Zobacz polecane:</Headline>
      <Line />
      <StyledPopularWrapper>
        <Popular />
      </StyledPopularWrapper>
    </ArticleLayout>
  );
}

export default ArticleView;