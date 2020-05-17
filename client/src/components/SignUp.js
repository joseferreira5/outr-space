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
import signupImage from '../assets/signupImage.jpg';

export default function SignUp({ handleRegister }) {
  const [user, setUser] = useState({
    username: '',
    email: '',
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

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Form
        onSubmit={e => {
          e.preventDefault();
          handleRegister(user);
          history.push('/');
        }}
      >
        <Heading>Sign Up</Heading>
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
        <Label htmlFor="email">
          Email:{' '}
          <Input
            id="email"
            type="text"
            name="email"
            value={user.email}
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
          Already have an account?{' '}
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            Log in here.
          </Link>{' '}
        </p>
      </Form>
      <Image image={signupImage} />
    </Container>
  );
}
