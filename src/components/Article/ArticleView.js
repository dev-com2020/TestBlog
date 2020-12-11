import React from 'react';
import { Line } from '../Line/line';
import Avatar from '../Avatar/Avatar';
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
} from './ArticleViewStyles';


const ArticleView = ({ title, category, mainPhoto, author, date, thumbnail, content, tags }) => {
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
        <StyledImg src={mainPhoto} />
        <Avatar
          name={author}
          date={date}
          picture={thumbnail}
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

export default ArticleView;