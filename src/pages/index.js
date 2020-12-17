import React, { useState } from "react"
import MainLayout from '../layouts/index';
import styled from 'styled-components';
import Lattest from '../components/Lattest/Lattest';
import Authors from "../components/Authors/Authors";
import ThemeArticle from '../components/ThemeArticle/ThemeArticle';
import Newsletter from '../components/Newsletter/Newsletter';
import IsMobileHook from '../hooks/IsMobileHook';
import PopularPosts from '../layouts/PopularPosts';

const StyledWrapper = styled.div`
width:80vw;
margin:30px auto 0;
display:flex;
justify-content:space-between;
overflow:hidden;
@media (max-width:1650px) {
  flex-wrap:wrap;
}
`;
const StyledLattest = styled(Lattest)`
flex-basis:55%;
`;
const StyledAuthors = styled(Authors)`
flex-basis:20%;
`;
const StyledNewsletterWrapper = styled.div`
margin:0 auto;
overflow:hidden;
`;
const IndexPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  IsMobileHook(setIsMobile, 1650);
  return (
    <MainLayout isBaner isCategory>
      <StyledWrapper>
        <StyledLattest />
        <StyledAuthors />
      </StyledWrapper>
      <PopularPosts />
      <ThemeArticle />
      {isMobile ? <StyledNewsletterWrapper><Newsletter />
      </StyledNewsletterWrapper> : null}
    </MainLayout>
  )
}

export default IndexPage
