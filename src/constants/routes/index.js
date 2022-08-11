import Home from '../../pages/Home';
import Detail from '../../pages/Detail';
import NewPost from '../../pages/NewPost';

const allRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/post/:postId',
    component: Detail,
    exact: true,
  },
  {
    path: '/post/create',
    component: NewPost,
    exact: true,
  },
];

export default allRoutes;
