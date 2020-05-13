import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './components/shared/GlobalStyle';
import theme from './components/shared/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
