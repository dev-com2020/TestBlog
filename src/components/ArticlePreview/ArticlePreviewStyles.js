import styled from 'styled-components';
import Avatar from '../Avatar/Avatar';

export const StyledArticle = styled.div`
display:flex;
justify-content: flex-start;
align-items:${({ isMain }) => isMain ? "flex-start" : "center"};
position:relative;
flex-direction: ${({ isMain }) => isMain ? 'column' : 'row'};
@media(max-width:1024px) {
    flex-direction:column;
    align-items:flex-start;
}
`;
export const StyledArticleTexts = styled.div`
display:flex;
flex-direction: column;
align-items:flex-start;
justify-content: flex-start;
padding-left: 50px;
margin-left: ${({ isMain }) => isMain ? "35px" : null};
text-align:left;
@media(min-width:1024px) {
    text-align:left;
    height:110%;
}
@media(max-width:1024px) {
    padding-left: 20px;
}
`;
export const StyledParagraph = styled.p`
font-size:2rem;
font-weight:700;
align-self:flex-start;
@media(max-width:1024px) {
    font-size:1.6rem;
}
`;
export const StyledHeading = styled.h2`
font-size: 3.5rem;
font-weight:700;
text-align:left;
margin-top: -10px;
text-decoration: none;
color:#212223;
@media(max-width:1024px) {
    align-self: left;
    font-size:2.2rem;
}
`;
export const StyledImg = styled.div`
position:relative;
left:20px;
background: url(${({ src }) => src});
background-size:cover;
width:${({ isMain }) => isMain ? "100%" : "20%"};
height:${({ isMain }) => isMain ? "400px" : "100%"};
@media(max-width:1366px) {
    width:${({ isMain }) => isMain ? null : "30%"};
}
@media(max-width:1024px)
{
    width: ${({ isMain }) => isMain ? "125%" : "60%"};
    height: ${({ isMain }) => isMain ? null : "300px"};
}
@media(max-width:655px) {
    width:${({ isMain }) => isMain ? "125%" : "80%"};
    height:${({ isMain }) => isMain ? null : "150px"};
}

`;
export const StyledAvatar = styled(Avatar)`
@media(max-width:1024px){
    justify-self:left;
    align-self:left;
}
`;