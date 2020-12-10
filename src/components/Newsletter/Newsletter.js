import React from 'react';
import { Line } from '../Line/Line';
import NewsletterImg from '../../assets/img/newsletter.png';
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
    TestDiv
} from './NewsletterStyles';

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
                <StyledButton>ZAPISZ SIĘ!</StyledButton>
            </StyledForm>
        </StyledWrapper>);
}

export default Newsletter;