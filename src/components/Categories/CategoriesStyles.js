import styled from 'styled-components';

export const StyledWrapper = styled.div`
width:100%;
display:flex;
justify-content:space-between;
margin-top: 25px;
@media (max-width:600px) {
    flex-wrap:wrap;
    justify-content:center;
}
`;
export const StyledHeading = styled.h2`
font-size: 2rem;
font-weight: 700;
`;
export const StyledImage = styled.div`
height:266px;
width:261px;
background: linear-gradient(#0b112aa8,#0b112aa8),url(${({ src }) => src});
display:flex;
justify-content:center;
align-items:center;
text-decoration:none;

`;
export const StyledText = styled.p`
font-size: 2.2rem;
color:#7EE5FF !important;
text-transform:uppercase;
@media (max-width:1000px) {
    font-size:1.5rem;
}
`;