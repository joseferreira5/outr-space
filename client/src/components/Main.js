import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Post from './Post';

const StyledMain = styled.main`
  position: relative;
  width: 100%;
  height: 92vh;
`;

export default function Main({ user, handleLogin, handleRegister }) {
  return (
    <StyledMain>
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/signup">
          <SignUp handleRegister={handleRegister} />
        </Route>
        <Route path="/login">
          <LogIn handleLogin={handleLogin} />
        </Route>
        <Route path="/posts/:id">
          <Post user={user} />
        </Route>
      </Switch>
    </StyledMain>
  );
}
