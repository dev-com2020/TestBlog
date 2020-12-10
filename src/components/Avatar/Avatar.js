import React from 'react';
import styled from 'styled-components';
import Author from '../../assets/img/authour-pic.png';

const StyledWrapper = styled.div`
display:flex;
justify-content:${({ isCenter }) => isCenter ? 'center' : 'space-between'};
align-items:center;
`;
const StyledImg = styled.img`
width:50px;
height:50px;
border-radius:50%;
margin-right: 15px;
`;
const StyledWrapperText = styled.div`
display:flex;
flex-direction:column;
`;
const StyledParagraph = styled.p`
font-size: 1.5rem;
font-weight:700;
& span {
    font-weight:300;
    display: block;
}
`;
const Avatar = ({ name, date, isCenter }) => {
    return (
        <StyledWrapper isCenter={isCenter}>
            <StyledImg src={Author} />
            <StyledWrapperText>
                <StyledParagraph>
                    {name}
                    <span>{date}</span>
                </StyledParagraph>
            </StyledWrapperText>
        </StyledWrapper>
    );
}
export default Avatar;