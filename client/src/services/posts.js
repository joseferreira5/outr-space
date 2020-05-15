import api from './apiConfig';

export const getPosts = async () => {
  const res = await api.get('/posts');
  return res.data;
};

export const getPost = async id => {
  const res = await api.get(`/posts/${id}`);
  return res.data;
};

export const createPost = async data => {
  const res = await api.post('/posts/', { post: data });
  return res.data;
};

export const updatePost = async (id, data) => {
  const res = await api.put(`/posts/${id}`, { post: data });
  return res.data;
};

export const deletePost = async id => {
  const res = await api.delete(`/posts/${id}`);
  return res.data;
};

export const createComment = async (id, data) => {
  const res = await api.post(`/posts/${id}/comments`, {
    comment: data,
  });
  return res.data;
};

export const deleteComment = async (postId, commId) => {
  const res = await api.delete(`/posts/${postId}/comments/${commId}`);
  return res.data;
};
