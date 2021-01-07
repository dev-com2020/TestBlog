import React from 'react';
import Avatar from '../Avatar/Avatar';
import { Disqus } from 'gatsby-plugin-disqus';
import Popular from '../Popular/Popular';
import { uuid } from 'uuidv4';
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
          switch (itemKey) {
            case 'heading':
              return (<StyledArticleHeading key={uuid()}>{item.heading}</StyledArticleHeading>)
            case 'picture':
              return (<StyledArticleImg key={uuid()} fluid={item.picture.fluid} alt={item.heading} />)
            case 'paragraph':
              return (<StyledArticleParagraph key={uuid()}>{item.paragraph}</StyledArticleParagraph>)
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