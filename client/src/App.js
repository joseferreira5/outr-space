import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider>
      <Switch>
        <Route />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
