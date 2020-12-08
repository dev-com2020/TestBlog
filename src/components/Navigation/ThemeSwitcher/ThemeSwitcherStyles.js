import styled from 'styled-components';

export const StyledCheckbox = styled.input`
opacity:0;
position:absolute;
&:checked + label div {
    transform:translateX(15px);
    background-color: #fff;
}
&:checked + label {
    background-color: #333;
}
`;
export const StyledBall = styled.div`
background-color: #000;
	border-radius: 50%;
	position: absolute;
	top: 2px;
	left: 2px;
	height: 10px;
	width: 10px;
	transform: translateX(0px);
	transition: 0.2s linear;
`;
export const StyledLabel = styled.label`
background-color: #fff;
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