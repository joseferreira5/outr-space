import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from './shared/Button';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 50%;
  min-height: 500px;
  margin: 0 auto;
  background-color: ${props => props.theme.lightShade};
  margin-top: 10em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 15em;
`;

const Heading = styled.h2`
  font-size: 2rem;
`;

const Label = styled.label``;

const Input = styled.input``;

export default function LogIn({ handleLogin }) {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleLogin(user);
    history.push('/');
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <Heading>Log In</Heading>
        <Label htmlFor="username">
          Username:{' '}
          <Input
            id="username"
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </Label>
        <Label htmlFor="password">
          Password:{' '}
          <Input
            id="password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </Label>
        <Button>Submit</Button>
      </Form>
    </Section>
  );
}
