import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
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

const Line = () => {
    return (
        <StyledLine className="line"><span className="line__span" /></StyledLine>
    )
}

export default Line;