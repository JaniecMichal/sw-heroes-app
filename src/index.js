import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from 'assets/GlobalStyles/GlobalStyles';
import { theme } from 'assets/theme/theme';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from 'views/App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
