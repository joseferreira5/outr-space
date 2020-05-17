import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './components/shared/GlobalStyle';
import theme from './components/shared/theme';

import Header from './components/Header';
import Main from './components/Main';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from './services/auth';

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function getUser() {
      const currentUser = await verifyUser();
      setUser(currentUser);
    }
    getUser();
  }, []);

  const handleLogin = async data => {
    const currentUser = await loginUser(data);
    setUser(currentUser);
  };

  const handleRegister = async data => {
    const currentUser = await registerUser(data);
    setUser(currentUser);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    removeToken();
    history.push('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header user={user} handleLogout={handleLogout} />
      <Main
        user={user}
        handleLogin={handleLogin}
        handleRegister={handleRegister}
      />
    </ThemeProvider>
  );
}

export default App;
