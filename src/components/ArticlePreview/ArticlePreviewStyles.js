import styled from 'styled-components';
import Avatar from '../Avatar/Avatar';

export const StyledArticle = styled.div`
display:flex;
justify-content: flex-start;
align-items:${({ main }) => main ? "flex-start" : "center"};
position:relative;
flex-direction: ${({ main }) => main ? 'column' : 'row'};
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
text-align:left;
width: ${({ theme }) => theme ? "80%" : "100%"};
@media(min-width:1024px) {
    text-align:left;
    margin-left:${({ main }) => main ? "-25px" : null};
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

@media(max-width:1024px) {
    align-self: left;
    font-size:2.2rem;
}
`;
export const StyledImg = styled.div`
position:relative;
left:20px;
background: url(${({ src }) => src}) no-repeat;
background-size:cover;
background-position:center;
width:${({ main }) => main ? "100%" : "20%"};
height:${({ main }) => main ? "400px" : "100%"};
@media(max-width:1366px) {
    width:${({ main }) => main ? null : "30%"};
}
@media(max-width:1024px)
{
    width: ${({ main }) => main ? "125%" : "60%"};
    height: ${({ main }) => main ? null : "300px"};
}
@media(max-width:655px) {
    width:${({ index }) => index ? "125%" : "75%"};
    height:${({ main }) => main ? null : "150px"};
}

`;
export const StyledAvatar = styled(Avatar)`
@media(max-width:1024px){
    justify-self:left;
    align-self:left;
}
`;

export const StyledExcerpt = styled.p`
font-size:2rem;
font-weight:400;
text-decoration:none;

margin: 25px 5px;
@media(max-width:1024px) {
    align-self:left;
    font-size:1.6rem;
    margin: 25px 0;
}
`;