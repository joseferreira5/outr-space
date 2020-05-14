import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { getPost } from '../services/posts';

const Container = styled.div``;

const PostBox = styled.div``;

const Title = styled.h3``;

const Text = styled.p``;

export default function Post() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function retrievePost() {
      const singlePost = await getPost(id);
      setPost(singlePost);
    }
    retrievePost();
  }, []);

  return (
    <Container>
      <Title>{post.title}</Title>
      <Text>{post.content}</Text>
    </Container>
  );
}
