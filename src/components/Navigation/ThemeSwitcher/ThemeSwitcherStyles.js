import styled from 'styled-components';

export const StyledCheckbox = styled.input`
opacity:0;
position:absolute;
&:checked + label div {
    transform: ${props => props.theme.mode === 'dark' ? 'translateX(15px)' : 'translateX(0px)'};
}
&:checked + label {
    background-color: ${props => props.theme.mode === 'dark' ? '#333' : '#fff'};
}`
	;
export const StyledBall = styled.div`
    background-color: ${props => props.theme.mode === 'dark' ? '#fff' : '#000'};
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 10px;
    width: 10px;
    transform: ${props => props.theme.mode === 'dark' ? 'translateX(15px)' : 'translateX(0px)'};
    transition: 0.2s linear;
	`;
export const StyledLabel = styled.label`
background-color: ${props => props.theme.mode === 'dark' ? '#333' : '#fff'};
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    height: 14px;
    width: 30px;
    transform: scale(1.5);
    transition: .2s linear;
`;