import React from 'react';
import styled from 'styled-components';
import { Line } from '../Line/Line';

const StyledWrapper = styled.div`
width:450px;
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
        </StyledWrapper>);
}

export default Newsletter;