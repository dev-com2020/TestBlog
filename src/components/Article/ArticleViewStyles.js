import styled from 'styled-components';
import MainLayout from '../../layouts/index';
import Img from 'gatsby-image';

export const StyledHeading = styled.h2`
font-size: 5rem;
font-weight: 700;
@media(max-width:800px) {
    font-size: 3rem;
}
`;
export const StyledCategoryHeading = styled.p`
font-size: 1.6rem;
font-weight:700;
`;
export const StyledImg = styled(Img)`
margin-bottom: 25px;
width:100%;
align-self:center;
@media(max-width:800px) {
}
`;
export const StyledArticleHeading = styled.p`
font-size: 2.8rem;
font-weight: 700;
@media(max-width:800px) {
    font-size: 2.2rem;
}
`;
export const StyledArticleParagraph = styled.p`
font-size: 2.2rem;
@media(max-width:800px) {
    font-size:1.8rem;
}
`;
export const StyledArticleImg = styled(Img)`
margin-top: 50px;
margin-bottom: 50px;
margin-left: auto;
margin-right:auto;
min-width:100%;
min-height:100%;
`;
export const StyledArticleWrapper = styled.div`
display:flex;
flex-direction: column;
width:70%;
margin: 0 auto;
align-items:left;
@media(max-width:800px) {
    width:90%;
}
@media (max-width:1024px) {
    align-items:center;
}
`;
export const StyledTag = styled.p`
font-size:2rem;
font-weight:700;
@media(max-width:800px) {
    font-size:1.3rem;
}
& a {
font-weight: 300;
}
`;
export const StyledDisqus = styled.div`
width:100%;
padding: 50px;
background-color:#313958;
`;

export const ArticleLayout = styled(MainLayout)`
overflow-x:hidden;
`;
export const StyledPopularWrapper = styled.div`
display:flex;
justify-content:space-between;
@media(max-width: 1366px) {
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
`;
export const Headline = styled.h2`
padding-top: 2rem;
font-size: 7.1rem;
font-weight: bold;
justify-self: left;
text-transform:uppercase;
@media(max-width:1460px) {
    font-size:3rem;
}
`