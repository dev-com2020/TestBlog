import React from 'react';
import MainLayout from '../layouts/index';
import styled from 'styled-components';

const StyledWrapper = styled.div`
width:100vw;
display:flex;
flex-direction:column;
align-items:flex-start;
`;
const StyledHeading = styled.h2`
font-size: 3rem;
text-align:center;
@media(max-width:1000px) {
    font-size: 1.6rem;
    width:90%;
}
`;

const NotFoundPage = () => {
    return (
        <MainLayout isBaner>
            <StyledWrapper>
                <StyledHeading>Ups! Nie znaleźliśmy takiej strony!</StyledHeading>
                <StyledHeading>Spróbuj przejść na poprawną podstronę (wybierając na przykład z menu)</StyledHeading>
            </StyledWrapper>
        </MainLayout>
    );
}

export default NotFoundPage;