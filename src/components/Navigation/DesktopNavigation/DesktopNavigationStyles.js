import styled from 'styled-components';
import { Link } from 'gatsby';
import Search from '../../../assets/svg/Search.svg';

export const StyledNav = styled.nav`
display:flex;
position:fixed;
top:0;
left:0;
right:0;
justify-content:space-around;
align-items:center;
height:68px;
background-color:#0B112A;
z-index:9999;
overflow:hidden;
`;
export const StyledList = styled.ul`
display:flex;
width:60vw;
justify-content:space-around;
@media(max-width:1310px) {
    width:80vw;
}
@media(max-width:1577px) {
    width:70vw;
}
`;
export const StyledItem = styled.li`
list-style:none;
position:relative;
border-left: 2px solid white;
text-align:center;
padding: auto 20px;
width:300px;
&:nth-of-type(1) {
    border:none;
}
`;
export const StyledLink = styled(Link)`
font-weight:300;
font-size:2rem;
color:white;
text-decoration:none;
display:block;
&.active {
    color:yellow;
}
`;
export const StyledSearch = styled.div`
display:inline-block;
width:20px;
height:20px;
background: url(${Search}) no-repeat;
background-size:cover;
position:absolute;
right:-30px;
top:4.5px;
`;
export const StyledSearchLink = styled(Link)`
color:white;
position:relative;
font-size:2rem;
`;