import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
      html {
        box-sizing: border-box
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
    } 
      body {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        background-color:${({ theme }) => theme.colors.shark};
        color: ${({ theme }) => theme.colors.heather};
        padding:10px;
    }
`;
