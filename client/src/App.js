import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './components/shared/GlobalStyle';
import theme from './components/shared/theme';

import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [user, setUser] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main user={user} />
    </ThemeProvider>
  );
}

export default App;
