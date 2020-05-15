import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import CreateComment from './CreateComment';
import Button from './shared/Button';
import { Nav, NavLink } from './shared/NavLink';
import { getPost, deletePost } from '../services/posts';

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 25%;
  grid-template-rows: minmax(30%, auto) 1fr;
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
  margin-bottom: 1em;
`;

const Text = styled.p``;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 1px #000000;
  border-radius: 0.3em;
  padding: 1em;
`;

const CommSection = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
`;

const Comment = styled.div`
  background-color: ${props => props.theme.lightShade};
  margin-top: 1.5em;
  min-height: 5em;
  border-radius: 0.3em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
`;

const OwnerOptions = styled.div`
  display: flex;

  button {
    margin-left: 0.5em;
  }
`;

export default function Post({ user }) {
  const [post, setPost] = useState(null);
  const [created, setCreated] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function retrievePost() {
      const singlePost = await getPost(id);
      setPost(singlePost);
    }
    retrievePost();
    setCreated(false);
  }, [created]);

  const handleDelete = () => {
    deletePost(post.id);
    history.push('/');
  };

  return (
    <Section>
      {post && (
        <PostContent>
          <Title>{post.title}</Title>
          <Text>{post.content}</Text>
          {user ? (
            <>
              <CreateComment
                user={user}
                postId={post.id}
                onCreate={() => setCreated(!created)}
              />
              {user.id === post.user_id && (
                <OwnerOptions>
                  <NavLink>EDIT</NavLink>
                  <Button onClick={handleDelete}>DELETE</Button>
                </OwnerOptions>
              )}
            </>
          ) : (
            <NavContainer>
              <Text>Log in or create an account to comment.</Text>
              <Nav>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
              </Nav>
            </NavContainer>
          )}
        </PostContent>
      )}
      <CommSection>
        {post &&
          post.comments &&
          post.comments.map(comment => (
            <Comment key={comment.id}>
              <Text>{comment.body}</Text>
            </Comment>
          ))}
      </CommSection>
    </Section>
  );
}
