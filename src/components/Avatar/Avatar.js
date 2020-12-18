import React from 'react';
import {
    StyledWrapper,
    StyledImg,
    StyledWrapperText,
    StyledParagraph
} from './AvatarStyles';


const Avatar = ({ name, date, isCenter, picture, isPopular }) => {
    return (
        <StyledWrapper isCenter={isCenter} >
            <StyledImg src={picture} />
            <StyledWrapperText isPopular={isPopular}>
                <StyledParagraph>
                    {name}
                    <span>{date}</span>
                </StyledParagraph>
            </StyledWrapperText>
        </StyledWrapper>
    );
}
export default Avatar;