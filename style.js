import { createGlobalStyle } from 'styled-components';

const UI = {
    colors: {
        primary: 'black',
        bgMenu: `rgba(36, 18, 54, 0.976)`
    }
}

export const Breakpoints = null;

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: left;
        background-color: #fff;
    }
    * {
        box-sizing: border-box;   
    }
    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }
  
`

export default UI;