import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Post from './Post';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import ScrollToTop from './ScrollToTop';

const StyledMain = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0 0.5em;
  padding-top: 8vh;
`;

export default function Main({ user, handleLogin, handleRegister }) {
  const location = useLocation();
  return (
    <StyledMain>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route path="/signup">
            <SignUp handleRegister={handleRegister} />
          </Route>
          <Route path="/login">
            <LogIn handleLogin={handleLogin} />
          </Route>
          <Route exact path="/posts/:id">
            <ScrollToTop />
            <Post user={user} />
          </Route>
          <Route exact path="/posts/:id/edit">
            <ScrollToTop />
            <EditPost user={user} />
          </Route>
          <Route exact path="/submit">
            <ScrollToTop />
            <CreatePost user={user} />
          </Route>
        </Switch>
      </AnimatePresence>
    </StyledMain>
  );
}
