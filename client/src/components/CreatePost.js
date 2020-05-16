import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from './shared/Button';
import { createPost } from '../services/posts';

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 25%;
  grid-template-rows: minmax(30%, auto) 1fr;
  min-height: 100%;
  max-width: 1248px;
  margin: 0 auto;
  margin-top: 3em;
  padding: 2em;
`;

const PostForm = styled.form`
  background-color: ${props => props.theme.lightShade};
  border-radius: 0.3em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 2em 5em;
`;

const Input = styled.input`
  width: 100%;
  min-height: 3em;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 10em;
  margin-top: 0.5em;
`;

const ButtonGrp = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5em;

  button {
    margin-left: 0.5em;
  }
`;

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
    <Section>
      <PostForm onSubmit={handleSubmit}>
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
      </PostForm>
    </Section>
  );
}
