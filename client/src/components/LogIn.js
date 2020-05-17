import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Button from './shared/Button';
import {
  Container,
  Form,
  Heading,
  Label,
  Input,
  Image,
} from './shared/LoginSignup';
import loginImage from '../assets/loginImage.jpg';

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
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
          Don't have an account?{' '}
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            Sign up here.
          </Link>{' '}
        </p>
      </Form>
      <Image image={loginImage} />
    </Container>
  );
}
