import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Raleway', sans-serif;
        overflow-y: hidden;
    }
    
    a, button {
        font-family: 'Raleway', sans-serif;
    }
`;
