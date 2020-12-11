import styled from 'styled-components';
export const StyledWrapper = styled.div`
width:450px;
display:flex;
flex-direction:column;
align-items:center;
@media(max-width:1024px) {
    width:100%;
align-items:center;
}
`;
export const StyledHeading = styled.h2`
font-size: 2rem;
font-weight:700;
`;
export const StyledImg = styled.img`
width: 348px;
height:324px;
margin-top: 25px;
@media(max-width:530px) {
    width:200px;
    height:180px;
}
`;
export const StyledParagraph = styled.p`
font-size: 2rem;
font-weight: 300;
text-align:center;
width:90%;
@media(max-width:530px) {
    font-size:1.6rem;
    text-align:center;
    width:60%;
}
`;
export const StyledList = styled.ul`
display:flex;
justify-content:space-around;
width:100%;
@media(max-width:500px) {
    width:90%;
    justify-content:flex-start;
    grid-gap:10px;
}
`;
export const StyledItem = styled.li`
list-style:none;`;
export const StyledLink = styled.a`
background: url(${({ src }) => src});
background-size:cover;
height:38px;
width:38px;
display:block;
`;