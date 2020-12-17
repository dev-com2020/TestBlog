import styled from 'styled-components';


export const StyledHeading = styled.h2`
font-size:7rem;
font-weight:bold;
text-transform:uppercase;
@media(max-width:1024px) {
    font-size:3rem;
}
`;
export const StyledFormWrapper = styled.form`
display:flex;
flex-direction:column;
`;
export const StyledInput = styled.input`
height: 70px;
margin-top: 25px;
font-size:3rem;
padding:15px;
@media(max-width:800px) {
    font-size: 2rem;
}
`;
export const StyledButton = styled.button`
width: 250px;
align-self:center;
margin:25px auto;
padding:15px;
background-color:#212223;
color:white;
text-transform:uppercase;
font-size: 3rem;
border:none;
`;
export const ArticlePreviewWrapper = styled.div`
width: 50vw;
margin: 0 auto;
display:flex;
flex-direction:column;
grid-gap: 80px;
@media(max-width:1024px) {
    align-items:left;
    width:100vw;
}
`;