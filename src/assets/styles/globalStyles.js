import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
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
.disqus {
/* background-color: #313958; */
background-color:${props => props.theme.mode === 'dark' ? "#313958" : "#fff"};
a, abbr, acronym, address, blockquote, button, caption, cite, code, dd, del, dfn, dl, dt, em, fieldset, form, h1, h2, h3, h4, h5, h6, img, label, legend, li, ol, p, pre, q, s, samp, small, strike, strong, sub, sup, table, tbody, td, tfoot, th, thead, tr, tt, ul, var {
color:${props => props.theme.mode === 'dark' ? "#fff" : "black"} !important;
}
}
`;

export default GlobalStyle;