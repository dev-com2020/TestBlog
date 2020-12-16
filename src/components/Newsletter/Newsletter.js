import React from 'react';
import NewsletterImg from '../../assets/img/newsletter.png';
import styled from 'styled-components'

import {
    StyledWrapper,
    StyledHeading,
    StyledParagraph,
    StyledSpan,
    StyledImg,
    StyledForm,
    StyledCheckboxLabel,
    StyledCheckboxInput,
    StyledInput,
    StyledInputLabel,
    StyledButton,
} from './NewsletterStyles';
const Line = styled.div`
height:4px;
width:100%;
background-color:lightgray;
border-radius: 4px;
overflow:hidden;
position:relative;
& span {
    position:absolute;
    height:4px;
    width: 5%;
    left:0;
}
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
                <StyledCheckboxLabel htmlFor="first-checkbox">
                    <StyledCheckboxInput type="checkbox" id="first-checkbox" />
                    Zgadzam się na przetwarzanie podanych przeze mnie w formularzu danych osobowych przez xxx w celu wysyłania mi newslettera, informacji o wpisach blogowych, produktach i usługach, zgodnie z Polityką prywatności.
                </StyledCheckboxLabel>
                <StyledCheckboxLabel htmlFor="second-checkbox">
                    <StyledCheckboxInput type="checkbox" id="second-checkbox" />
                    Zgadzam się na przetwarzanie podanych przeze mnie w formularzu danych osobowych przez xxx w celu wysyłania mi newslettera, informacji o wpisach blogowych, produktach i usługach, zgodnie z Polityką prywatności.
                </StyledCheckboxLabel>
                <StyledButton className="submit">ZAPISZ SIĘ!</StyledButton>
            </StyledForm>
        </StyledWrapper>);
}

export default Newsletter;