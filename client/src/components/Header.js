import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from './shared/Button';
import logo from '../assets/astronaut.svg';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.lightShade};
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
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
  font-size: 2.5rem;
  color: ${props => props.theme.darkShade};
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 2em;
  font-size: 1rem;
  color: #000000;
  border: 1px solid ${props => props.theme.darkShade};
  padding: 10px 15px;

  &:hover {
    transition: all 0.5s ease-in;
    background-color: ${props => props.theme.darkShade};
    color: ${props => props.theme.lightShade};
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.darkShade};
  align-self: center;
  margin-right: 2em;
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
          <Text>{user.username}</Text>
          <Button onClick={handleLogout}>LOG OUT</Button>
        </Nav>
      ) : (
        <Nav>
          <StyledLink to="/login">LOG IN</StyledLink>
          <StyledLink to="/signup">SIGN UP</StyledLink>
        </Nav>
      )}
    </StyledHeader>
  );
}
