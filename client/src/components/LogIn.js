import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from './shared/Button';
import loginImage from '../assets/loginImage.jpg';

const Section = styled.section`
  display: grid;
  grid-template-columns: 70% 1fr;
  max-width: 700px;
  min-height: 500px;
  background-color: ${props => props.theme.lightShade};
  margin: 0 auto;
  border-radius: 0.3em;
  margin-top: 10em;
`;

const Form = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 15em;
  padding-left: 1em;
`;

const Heading = styled.h2`
  font-size: 2rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
`;

const Input = styled.input`
  border-radius: 0.3em;
  max-width: 70%;
  font-family: 'Roboto';
  font-size: 1rem;
  padding: 0.2em;
`;

const Image = styled.div`
  background-image: url(${loginImage});
  background-position: center;
`;

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
        <p>
          Don't have an account? <Link to="/signup">Sign up here.</Link>{' '}
        </p>
      </Form>
      <Image />
    </Section>
  );
}
