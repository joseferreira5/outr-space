import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './shared/Button';
import { createComment } from '../services/posts';

const CommBox = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-flow: wrap;
  width: 100%;
  min-height: 10em;
  margin-top: 1em;
`;

const Text = styled.p`
  font-size: 0.7rem;
  margin-bottom: 0.3em;
`;

const TextArea = styled.textarea`
  font-family: 'Roboto';
  font-size: 0.8rem;
  border-radius: 0.3em;
  padding: 1em;
  min-width: 100%;
  min-height: 8em;
  margin-bottom: 0.8em;
`;

export default function CreateComment({ user, postId, onCreate }) {
  const [comment, setComment] = useState({ body: '' });

  const handleChange = e => {
    const { value } = e.target;
    setComment({ body: value });
  };

  const handleSubmit = async () => {
    if (comment.body.length > 0) {
      createComment(postId, comment);
      setComment({ body: '' });
      onCreate();
    }
  };

  return (
    <CommBox>
      <Text>Comment as {user.username}</Text>
      <TextArea onChange={handleChange} value={comment.body} />
      <Button onClick={handleSubmit}>COMMENT</Button>
    </CommBox>
  );
}
