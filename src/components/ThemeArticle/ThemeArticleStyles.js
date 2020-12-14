import styled from 'styled-components';

export const StyledWrapper = styled.div`
width: 50vw;
margin: 75px auto;
justify-content:center;
align-items:center;
display:flex;
flex-direction:column;
grid-gap: 80px;
@media(max-width:1024px) {
    width:100vw;
}
`;

export const StyledHeading = styled.h2`
font-size: 7.1rem;
font-weight:700;
@media(max-width:1024px) {
    font-size:4rem;
}
`;