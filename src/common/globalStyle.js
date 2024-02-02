import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        font-family: 'Roboto', sans-serif;
        background: #f1f1f1;
    }
    p{
        margin: 0;
    }
`

export default GlobalStyle;