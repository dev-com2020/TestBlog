import * as React from "react"
import MainLayout from '../layouts/index';
import styled from 'styled-components';
import Lattest from '../components/Lattest/Lattest';
import Authors from "../components/Authors/Authors";


const StyledWrapper = styled.div`
width:80vw;
margin:30px auto 0;
display:flex;
justify-content:space-between;
overflow:hidden;
@media (max-width:1024px) {
  flex-wrap:wrap;
}
`;
const StyledLattest = styled(Lattest)`
flex-basis:55%;
`;
const StyledAuthors = styled(Authors)`
flex-basis:20%;
`;
const StyledSideBar = styled.div`
display:flex;
flex-direction:column;
width:30%;
`;
const IndexPage = () => {
  return (
    <MainLayout isBaner isCategory>
      <StyledWrapper>
        <StyledLattest />
        <StyledAuthors />
      </StyledWrapper>
    </MainLayout>
  )
}

export default IndexPage
