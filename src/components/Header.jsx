import { useSelector } from 'react-redux';
import { SvgBell, SvgGrid } from '../assets/icons';
import { Avatar } from '../components';
import profile from '../assets/images/profile.jpg';

function Header() {
  return (
    <header className="bg-white shadow my-4">
      <nav className="h-[70px] flex flex-row justify-between items-center p-4">
        <div>
          <h1 className="font-bold text-3xl">Arbit Blog</h1>
        </div>
        <div className="flex flex-row items-center gap-4 ">
          <Posts />
          <SvgBell />
          <SvgGrid />
          <Avatar src={profile} size="32px" alt="Abdulkadir Develioğlu" />
        </div>
      </nav>
    </header>
  );
}

export default Header;

const Posts = () => {
  const { posts } = useSelector((state) => state.postReducer);
  return (
    <div>
      <p className="flex justify-center text-xs text-lime-800 bg-green-200 rounded-full aspect-square max-h-[15px] ml-auto">
        {posts}
      </p>
      <p className="font-semibold text-sm">Posts</p>
    </div>
  );
};
