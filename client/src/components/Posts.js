import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from './shared/Button';
import { getPosts } from '../services/posts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  margin-top: 1.5em;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  color: ${props => props.theme.lightShade};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 10% 1fr;
  background-color: ${props => props.theme.lightShade};
  margin-top: 2em;
  min-height: 8em;
  border-radius: 0.3em;
`;

const CardBody = styled.div`
  grid-column: 2 / 3;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em 0;
  height: 100%;
`;

const Title = styled.h3`
  font-size: 2rem;
`;

const CommCount = styled.p`
  font-size: 1rem;
`;

export default function Posts({ user }) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function retrievePosts() {
      const allPosts = await getPosts();
      setPosts(allPosts);
    }
    retrievePosts();
  }, []);

  return (
    <Container>
      <Header>
        <Heading>Latest Posts</Heading>
        {user && (
          <StyledLink to={'/create-post'}>
            <Button>NEW POST</Button>
          </StyledLink>
        )}
      </Header>
      {posts &&
        posts.map(post => (
          <StyledLink key={post.id} to={`/posts/${post.id}`}>
            <Card>
              <CardBody>
                <Title>{post.title}</Title>
                <CommCount>{post.comments.length} Comments</CommCount>
              </CardBody>
            </Card>
          </StyledLink>
        ))}
    </Container>
  );
}
