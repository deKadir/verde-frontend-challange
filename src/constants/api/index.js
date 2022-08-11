import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com';

const API = axios.create({ baseURL: BASE_URL });

const requests = {
  listPosts: (params) => API.get('posts', { params }),
  createPost: (post) => API.post(`/posts`, post),
  getPost: (id) => API.get(`/posts/${id}`),
  updatePost: (post) => API.put(`/posts/${post.id}`, post),
  deletePost: (id) => API.delete(`/posts/${id}`),
  getComments: (postId) => API.get(`/comments?postId=${postId}`),
};

export default requests;
