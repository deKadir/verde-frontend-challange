import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SvgArrowLeft } from '../assets/icons';
import { Button, Container, Header, Main, Response } from '../components';

import requests from '../constants/api';
import { increasePosts } from '../redux/reducers/postReducer';

function NewPost() {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
}

export default NewPost;

const Content = () => {
  const [post, setPost] = React.useState({ userId: 1, title: '', body: '' });
  const [response, setResponse] = React.useState();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const createPost = () => {
    setResponse({});
    requests.createPost(post).then((res) => {
      setResponse({ success: true, message: 'Post published!' });
      dispatch(increasePosts());
    });
  };

  return (
    <Main>
      <section className="lg:w-1/2 sm:w-100">
        <div className="flex justify-between mb-6">
          <Link to={'/'} className="flex items-center gap-4">
            <SvgArrowLeft className="" />
            <p className="font-bold text-lg">Posts</p>
          </Link>
        </div>
        <article className="flex flex-col">
          <label className="mb-4 font-bold text-xl">Title</label>
          <textarea
            name="title"
            className="min-h-[100px] mb-4 bg-zinc-100 outline-0 p-4 font-bold text-xl resize-none"
            onChange={handleChange}
            value={post?.title}
          />
          <label className="mb-4 font-bold text-xl">Detail</label>
          <textarea
            name="body"
            className="min-h-[300px] mb-4 bg-zinc-100 outline-0 p-4 text-xl text-slate-600 resize-none"
            onChange={handleChange}
            value={post?.body}
          />
        </article>
        <Response {...response} />
        <div className="flex justify-end gap-6">
          <Button onClick={createPost}>Publish</Button>
        </div>
      </section>
    </Main>
  );
};
