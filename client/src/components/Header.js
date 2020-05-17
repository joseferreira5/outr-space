import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Nav, NavLink } from './shared/NavLink';
import Button from './shared/Button';
import logo from '../assets/astronaut.svg';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.lightShade};
  position: fixed;
  z-index: 1000;
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 5%;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

const Title = styled(Link)`
  font-family: 'Roboto Slab', sans-serif;
  font-size: 2rem;
  color: ${props => props.theme.darkShade};
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.darkShade};
  align-self: center;
  margin-right: 1em;

  @media (max-width: 480px) {
    display: none;
  }
`;

export default function Header({ user, handleLogout }) {
  return (
    <StyledHeader>
      <Heading>
        <Logo src={logo} alt="astronaut" />
        <Title to="/">OUTr SPACE</Title>
      </Heading>
      {user ? (
        <Nav>
          <Text>Welcome, {user.username}</Text>
          <Button onClick={handleLogout}>LOG OUT</Button>
        </Nav>
      ) : (
        <Nav>
          <NavLink to="/login">LOG IN</NavLink>
          <NavLink to="/signup">SIGN UP</NavLink>
        </Nav>
      )}
    </StyledHeader>
  );
}
