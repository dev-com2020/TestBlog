import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');
*,
*::before,
*::after {
    box-sizing:border-box;
}

body {
    margin: 0;
    padding:0;
    font-family: 'Roboto Condensed', sans-serif;
    overflow-x:hidden;
    padding-top: 68px;
    background-color: ${props => props.theme.mode === 'dark' ? '#0B1026' : '#fff'} !important;
    color: ${props => props.theme.mode === 'dark' ? '#fff' : '#0B1026'} !important;
    a {
    color: ${props => props.theme.mode === 'dark' ? '#fff' : '#0B1026'} !important;
    }
        /* transition: color, background-color 0.5s linear; */
}
html {
    font-size:62.5%;
}
.submit {
    background-color: ${props => props.theme.mode === 'dark' ? "#9400F6" : "#0B122D"};
    color: white !important;
}
.line {
    background-color:${props => props.theme.mode === 'dark' ? "#192246" : "lightgray"};
}
.line__span {
    background-color:${props => props.theme.mode === 'dark' ? "lightgray" : "#0B1026"}
}
`;

export default GlobalStyle;