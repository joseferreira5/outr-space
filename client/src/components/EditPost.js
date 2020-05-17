import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './shared/Button';
import { Container, Form, Input, TextArea, ButtonGrp } from './shared/PostForm';
import editImage from '../assets/editImage.jpg';
import { getPost, updatePost } from '../services/posts';

export default function EditPost({ user }) {
  const [post, setPost] = useState({ title: '', content: '' });
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    async function retrievePost() {
      const singlePost = await getPost(id);
      setPost({
        title: singlePost.title,
        content: singlePost.content,
      });
    }
    retrievePost();
  }, [id]);

  const handleChange = e => {
    const { value, name } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await updatePost(id, post);
    res && history.push(`/posts/${id}`);
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      image={editImage}
    >
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          value={post.title}
          onChange={handleChange}
        />
        <TextArea
          name="content"
          placeholder="Text (optional)"
          value={post.content}
          onChange={handleChange}
        />
        <ButtonGrp>
          <Button onClick={() => history.push(`/posts/${id}`)}>CANCEL</Button>
          <Button type="submit">POST</Button>
        </ButtonGrp>
      </Form>
    </Container>
  );
}
