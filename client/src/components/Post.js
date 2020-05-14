import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Button from './shared/Button';
import { Nav, NavLink } from './shared/NavLink';
import { getPost } from '../services/posts';

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 25%;
  grid-template-rows: 30% 1fr;
  min-height: 100%;
  width: 80%;
  margin: 0 auto;
  margin-top: 3em;
`;

const PostContent = styled.div`
  grid-column: 1 / 2;
  background-color: ${props => props.theme.lightShade};
  border-radius: 0.3em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2em 5em;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
`;

const Text = styled.p``;

const CommSection = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
`;

const Comment = styled.div`
  background-color: ${props => props.theme.lightShade};
  width: 80%;
  margin: 0 auto;
  margin-top: 1.5em;
  min-height: 5em;
  border-radius: 0.3em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
`;

export default function Post({ user }) {
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
    <Section>
      {post && (
        <PostContent>
          <Title>{post.title}</Title>
          <Text>{post.content}</Text>
          {user ? (
            <Button>Comment</Button>
          ) : (
            <Nav>
              <NavLink to="/login">Log In</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
            </Nav>
          )}
        </PostContent>
      )}
      <CommSection>
        {post &&
          post.comments &&
          post.comments.map(comment => (
            <Comment>
              <Text>{comment.body}</Text>
            </Comment>
          ))}
      </CommSection>
    </Section>
  );
}
