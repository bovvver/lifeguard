import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body{
        font-family: 'Poppins', sans-serif;
    }
    #root{
        position: relative;
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
