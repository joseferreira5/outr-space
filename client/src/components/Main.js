import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn';

const StyledMain = styled.main`
  position: relative;
  width: 100%;
`;

export default function Main({ user }) {
  return (
    <StyledMain>
      <Switch>
        <Route exact path="/" render={() => <Home user={user} />} />
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/signup" render={() => <LogIn />} />
      </Switch>
    </StyledMain>
  );
}
