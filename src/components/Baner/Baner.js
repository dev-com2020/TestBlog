import React from 'react';
import styled from 'styled-components';
import BanerImg from '../../assets/img/Banner.png';

const StyledWrapper = styled.div`
height: 392px;
width: 100vw;
background: url(${BanerImg});
`;

const Baner = () => {
    return (
        <StyledWrapper>
        </StyledWrapper>
    );
}

export default Baner;