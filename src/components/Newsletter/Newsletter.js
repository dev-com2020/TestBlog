import React from 'react';
import NewsletterImg from '../../assets/img/newsletter.png';
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'

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
import { render } from 'react-dom';
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
export default class Newsletter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
        }
    }

    state = {
        isChecked: false
    }

    handleCheck = () => {
        this.setState({ checked: !this.state.checked })

    }

    changeEmailHandler = (e) => {
        this.setState({ email: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.email.length === 0) {
            alert("Wypelnij pole e-mail");
        }
        else {
            if (this.state.checked) {

                addToMailchimp(this.state.email)
                alert('Zostales zapisany do newslettera!')
            }
            else {
                alert('Zaakceptuj regulamin')
            }
        }




    }

    render() {
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
                <StyledForm onSubmit={this.handleSubmit}>
                    <StyledInputLabel htmlFor="name">
                        IMIĘ:
                    <br />
                        <StyledInput type="text" id="name" />
                    </StyledInputLabel>
                    <StyledInputLabel htmlFor="email">
                        EMAIL:
                    <br />
                        <StyledInput type="email" id="email" value={this.state.email} onChange={this.changeEmailHandler} />
                    </StyledInputLabel>
                    <StyledCheckboxLabel htmlFor="first-checkbox">
                        <StyledCheckboxInput type="checkbox" id="first-checkbox" onChange={this.handleCheck} />
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
}
