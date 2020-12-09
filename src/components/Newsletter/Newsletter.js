import React from 'react';
import styled from 'styled-components';
import { Line } from '../Line/Line';
import NewsletterImg from '../../assets/img/newsletter.png';

const StyledWrapper = styled.div`
width:450px;
height:1100px;
display:flex;
flex-direction:column;
align-items:center;
margin-top: 100px;
`;
const StyledHeading = styled.h2`
font-size: 2rem;
font-weight:700;
color:#0B122D;
`;
const StyledParagraph = styled.p`
font-size: 2rem;
`;
const StyledSpan = styled.span`
display:block;
font-weight:700;
`;
const StyledImg = styled.img`
width:35%;
margin: 40px auto 120px;
`;
const StyledForm = styled.form`
height:30vh;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`;
const StyledCheckboxLabel = styled.label`
width:60%;
margin-left:50px;
font-size:1.2rem;
`;
const StyledCheckboxInput = styled.input`
/* margin-left: 10px; */
`;
const StyledInput = styled.input`
padding: 5px 20px;
margin: 20px auto;
border: 1px solid #C2BBBB;
font-family:'Roboto condensed',sans-serif;
`;
const StyledInputLabel = styled.label`
display:block;
font-size:1.5rem;
font-weight:700;
`;
const StyledButton = styled.button`
width:55%;
margin:35px auto auto;
background-color: #0B122D;
color:white;
border:none;
padding: 15px;
font-size:1.8rem;
font-family: 'Roboto condensed', sans-serif;
`;
const TestDiv = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
`;
const Newsletter = () => {
    return (
        <StyledWrapper>
            <StyledHeading>
                Newsletter
            </StyledHeading>
            <Line />
            <StyledParagraph>
                Chcesz być na bieżąco z każdym tematem?
                <StyledSpan>Zapisz się do naszego newslettera!</StyledSpan>
            </StyledParagraph>
            <StyledImg src={NewsletterImg} alt="newsletter" />
            <StyledForm>
                <StyledInputLabel htmlFor="name">
                    IMIĘ:
                    <br />
                    <StyledInput type="text" id="name" />
                </StyledInputLabel>
                <StyledInputLabel htmlFor="email">
                    EMAIL:
                    <br />
                    <StyledInput type="email" id="email" />
                </StyledInputLabel>
                <StyledCheckboxLabel for="first-checkbox">
                    <StyledCheckboxInput type="checkbox" id="first-checkbox" />
                    Zgadzam się na przetwarzanie podanych przeze mnie w formularzu danych osobowych przez xxx w celu wysyłania mi newslettera, informacji o wpisach blogowych, produktach i usługach, zgodnie z Polityką prywatności.
                </StyledCheckboxLabel>
                <TestDiv>
                    <StyledCheckboxInput type="checkbox" id="second-checkbox" />
                    <StyledCheckboxLabel for="second-checkbox">
                        Zgadzam się na przetwarzanie podanych przeze mnie w formularzu danych osobowych przez xxx w celu wysyłania mi newslettera, informacji o wpisach blogowych, produktach i usługach, zgodnie z Polityką prywatności.
                </StyledCheckboxLabel>
                </TestDiv>
                <StyledButton>ZAPISZ SIĘ!</StyledButton>
            </StyledForm>
        </StyledWrapper>);
}

export default Newsletter;