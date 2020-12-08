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
    height:300vh;
    font-family: 'Roboto Condensed', sans-serif;
    overflow-x:hidden;
    padding-top: 68px;
}
html {
    font-size:62.5%;
}
`;

export default GlobalStyle;