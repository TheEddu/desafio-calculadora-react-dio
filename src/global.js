import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: linear-gradient(135deg, #0f2027, #2c5364 100%);
        color: #e0e0e0;
        font-family: 'Roboto Mono', 'Fira Mono', 'Courier New', Courier, monospace;
        min-height: 100vh;
        box-sizing: border-box;
    }
`