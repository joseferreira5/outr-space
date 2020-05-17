import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from './shared/Button';
import { Container, Form, Input, TextArea, ButtonGrp } from './shared/PostForm';
import { createPost } from '../services/posts';

export default function CreatePost({ user }) {
  const [post, setPost] = useState({ title: '', content: '' });
  const history = useHistory();

  const handleChange = e => {
    const { value, name } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createPost(post);
    setTimeout(() => {
      history.push('/');
    }, 300);
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <TextArea
          name="content"
          placeholder="Text (optional)"
          onChange={handleChange}
        />
        <ButtonGrp>
          <Button onClick={() => history.push('/')}>CANCEL</Button>
          <Button type="submit">POST</Button>
        </ButtonGrp>
      </Form>
    </Container>
  );
}
