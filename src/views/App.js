import React from 'react';
import { GlobalStyle } from 'assets/GlobalStyles/GlobalStyles.js';
import { theme } from 'assets/theme/theme.js';
import { ThemeProvider } from 'styled-components';
import { MainWrapper } from './styled';
import CharactersList from 'components/organisms/CharactersList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <MainWrapper>
          <CharactersList />
        </MainWrapper>
      </>
    </ThemeProvider>
  );
}

export default App;
