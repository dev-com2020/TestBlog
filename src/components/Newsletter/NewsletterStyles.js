import styled from 'styled-components';

export const StyledWrapper = styled.div`
width:450px;
height:1100px;
display:flex;
flex-direction:column;
align-items:center;
margin-top: 100px;
@media(max-width:1024px) {
width: 100%;
}
`;
export const StyledHeading = styled.h2`
font-size: 2rem;
font-weight:700;
color:#0B122D;
`;
export const StyledParagraph = styled.p`
font-size: 2rem;
`;
export const StyledSpan = styled.span`
display:block;
font-weight:700;
`;
export const StyledImg = styled.img`
width:35%;
width:150px;
margin: 40px auto 120px;
@media(max-width:1024px) {
    width:150px;
    margin-bottom: 220px;
}
`;
export const StyledForm = styled.form`
height:30vh;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`;
export const StyledCheckboxLabel = styled.label`
width:60%;
margin-left:50px;
font-size:1.2rem;
`;
export const StyledCheckboxInput = styled.input`
`;
export const StyledInput = styled.input`
padding: 5px 20px;
margin: 20px auto;
border: 1px solid #C2BBBB;
font-family:'Roboto condensed',sans-serif;
`;
export const StyledInputLabel = styled.label`
display:block;
font-size:1.5rem;
font-weight:700;
`;
export const StyledButton = styled.button`
width:55%;
margin:35px auto auto;
background-color: #0B122D;
color:white;
border:none;
padding: 15px;
font-size:1.8rem;
font-family: 'Roboto condensed', sans-serif;
`;
export const TestDiv = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
`;