import { createGlobalStyle } from 'styled-components';

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
    font-family: 'Roboto', sans-serif;
    background: ${({theme}) => theme.colors.bg};
    color: ${({theme}) => theme.colors.text};
}
`;