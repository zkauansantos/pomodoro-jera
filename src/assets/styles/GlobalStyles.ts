import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    background: rgba(2,120,180,0.5);
    font-family: 'Roboto', sans-serif;
  }
`;