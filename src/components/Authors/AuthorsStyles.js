import styled from 'styled-components';
import Img from 'gatsby-image';
export const StyledWrapper = styled.div`
width:450px;
display:flex;
flex-direction:column;
align-items:center;
@media(max-width:1650px) {
    width:100%;
align-items:center;
}
`;

export const Image = styled(Img)`
margin-top:50px;
`;

export const Heading = styled.h2`
font-size: 3rem;
`;

export const PreHeading = styled.h2`
font-size: 1.8rem;
`;