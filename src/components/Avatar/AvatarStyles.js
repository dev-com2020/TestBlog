import styled from 'styled-components';

export const StyledWrapper = styled.div`
display:flex;
justify-content:${({ isCenter }) => isCenter ? 'center' : 'space-between'};
align-items:center;
justify-content:left;
flex-direction: row !important;
`;
export const StyledImg = styled.img`
width:50px;
height:50px;
border-radius:50%;
margin-right: 15px;
`;
export const StyledWrapperText = styled.div`
display:flex;
flex-direction:row;
`;
export const StyledParagraph = styled.p`
font-size: 1.5rem;
font-weight:700;
& span {
    font-weight:300;
    display: block;
}
`;