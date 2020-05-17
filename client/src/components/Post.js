import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Moment from 'react-moment';
import { motion } from 'framer-motion';

import CreateComment from './CreateComment';
import { Nav, NavLink } from './shared/NavLink';
import postBackground from '../assets/postBackground.jpg';
import { getPost, deletePost, deleteComment } from '../services/posts';

const Section = styled(motion.section)`
  display: grid;
  grid-template-columns: 1fr 25%;
  grid-template-rows: minmax(30%, auto) 1fr;
  background-image: url(${postBackground});
  background-position: center;
  background-size: cover;
  border: 2px solid ${props => props.theme.darkAccent};
  border-radius: 0.3em;
  min-height: 100%;
  max-width: 1248px;
  margin: 3em auto;
  padding-bottom: 1em;
`;

const PostContent = styled.div`
  grid-column: 1 / 2;
  background-color: ${props => props.theme.lightShade};
  border-radius: 0.3em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1em 2em;
  margin: 1em 1em;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1em;
`;

const Author = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1em;
`;

const Text = styled.p`
  line-height: 1.3;
  margin-bottom: 1em;
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 1px #000000;
  border-radius: 0.3em;
  padding: 1em;
  margin-top: 1em;
`;

const CommSection = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 1em;
`;

const Comment = styled.div`
  background-color: ${props => props.theme.lightShade};
  margin-top: 1.5em;
  min-height: 5em;
  width: 95%;
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

const Option = styled.p`
  font-size: 0.7rem;
  margin-right: 1em;
  &:hover {
    cursor: pointer;
  }
`;

export default function Post({ user }) {
  const [post, setPost] = useState(null);
  const [updated, setUpdated] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function retrievePost() {
      const singlePost = await getPost(id);
      setPost(singlePost);
    }
    retrievePost();
    setUpdated(false);
  }, [updated, id]);

  const handleDeletePost = () => {
    deletePost(post.id);
    setTimeout(() => {
      history.push('/');
    }, 300);
  };

  const handleDeleteComm = id => {
    deleteComment(post.id, id);
    setUpdated(!updated);
  };

  return (
    <Section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {post && (
        <PostContent>
          <Author>
            Posted by {post.username} about{' '}
            <Moment fromNow>{post.created_at}</Moment>
          </Author>
          <Title>{post.title}</Title>
          <Text>{post.content}</Text>
          {user ? (
            <>
              <CreateComment
                user={user}
                postId={post.id}
                onCreate={() => setUpdated(!updated)}
              />
              {user.id === post.user_id && (
                <OwnerOptions>
                  <Option
                    onClick={() => history.push(`/posts/${post.id}/edit`)}
                  >
                    Edit
                  </Option>
                  <Option onClick={handleDeletePost}>Delete</Option>
                </OwnerOptions>
              )}
            </>
          ) : (
            <NavContainer>
              <Text>Log in or create an account to comment.</Text>
              <Nav>
                <NavLink to="/login">LOG IN</NavLink>
                <NavLink to="/signup">SIGN UP</NavLink>
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
              <Author>
                {comment.user.username} about{' '}
                <Moment fromNow>{comment.created_at}</Moment>
              </Author>
              <Text>{comment.body}</Text>
              {user && user.id === comment.user_id && (
                <OwnerOptions>
                  <Option onClick={() => handleDeleteComm(comment.id)}>
                    Delete
                  </Option>
                </OwnerOptions>
              )}
            </Comment>
          ))}
      </CommSection>
    </Section>
  );
}
