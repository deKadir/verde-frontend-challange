import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Container, Main } from '../components';
import requests from '../constants/api';

function Home() {
  return (
    <Container>
      <Header />
      <Posts />
    </Container>
  );
}

export default Home;

const Posts = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const params = {
      _start: 0,
      _limit: 6,
    };

    requests.listPosts(params).then((res) => setPosts(res.data));
  }, []);

  return (
    <Main>
      <ul className="flex flex-wrap">
        {posts?.map((post, index) => (
          <Card {...post} key={index} />
        ))}
      </ul>
    </Main>
  );
};

const Card = ({ id, title, body }) => {
  return (
    <li className="p-6 lg:w-2/6 md:w-2/4 cursor-pointer">
      <Link to={`/post/${id}`}>
        <article title={title}>
          <h2 className="font-bold text-xl mb-4">{title}</h2>
          <p className="text-neutral-700">{body}</p>
        </article>
      </Link>
    </li>
  );
};
