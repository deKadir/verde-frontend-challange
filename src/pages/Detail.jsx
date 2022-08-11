import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SvgArrowLeft } from '../assets/icons';
import { Button, Container, Header, Main, Response } from '../components';
import requests from '../constants/api';
import { decreasePosts } from '../redux/reducers/postReducer';

function Detail() {
  return (
    <Container>
      <Header />
      <Main>
        <PostSection />
        <CommentSection />
      </Main>
    </Container>
  );
}

export default Detail;

const PostSection = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = React.useState({});
  const [response, setResponse] = React.useState();
  const dispatch = useDispatch();

  const createPost = () => navigate('/post/create');

  const updatePost = () => {
    setResponse({});
    requests
      .updatePost(post)
      .then(() =>
        setResponse({ success: true, message: 'Post successfully updated!' })
      );
  };

  const deletePost = () => {
    setResponse({});
    requests.deletePost(post.id).then(() => {
      dispatch(decreasePosts());
      setPost({ title: '', body: '' });
      setResponse({ success: true, message: 'Post deleted!' });
    });
  };

  const handleChange = ({ target }) => {
    setPost({ ...post, [target.name]: target.value });
  };

  React.useEffect(() => {
    requests.getPost(postId).then((res) => setPost(res.data));
  }, [postId]);

  return (
    <section className="lg:w-1/2 sm:w-100">
      {/* Post header */}
      <div className="flex justify-between mb-6">
        <Link to={'/'} className="flex items-center gap-4">
          <SvgArrowLeft className="" />
          <p className="font-bold text-lg">Posts</p>
        </Link>
        <Button onClick={createPost}>New post</Button>
      </div>
      {/* Post */}
      <article className="flex flex-col">
        <label className="mb-4 font-bold text-xl">Title</label>
        <textarea
          name="title"
          className="min-h-[100px] mb-4 bg-zinc-100 outline-0 p-4 font-bold text-xl resize-none"
          value={post?.title}
          onChange={handleChange}
        />
        <label className="mb-4 font-bold text-xl">Detail</label>
        <textarea
          name="body"
          className="min-h-[300px] mb-4 bg-zinc-100 outline-0 p-4 text-xl text-slate-600 resize-none"
          value={post?.body}
          onChange={handleChange}
        />
      </article>
      <Response {...response} />
      {/* Post actions */}
      <div className="flex justify-end gap-6">
        <Button className="bg-red-700" onClick={deletePost}>
          Delete
        </Button>
        <Button onClick={updatePost}>Update</Button>
      </div>
    </section>
  );
};

const CommentSection = () => {
  const { postId } = useParams();
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    requests.getComments(postId).then((res) => setComments(res.data));
  }, [postId]);

  return (
    <section>
      <p className="font-bold text-3xl my-6">Comments</p>
      <ul>
        {comments.map((comment, index) => (
          <Comment {...comment} key={index} />
        ))}
      </ul>
    </section>
  );
};

const Comment = ({ name, body }) => {
  return (
    <li className="p-6 lg:w-2/4 md:w-full">
      <article>
        <h2 className="font-bold text-xl mb-4">{name}</h2>
        <p className="text-neutral-700">{body}</p>
      </article>
    </li>
  );
};
