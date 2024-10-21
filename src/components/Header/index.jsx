import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='bg-gray-800 p-8 md:p-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='text-xl font-bold text-white'>My Website</div>
        <div className='flex space-x-4'>
          <Link to='/' className='text-white hover:underline'>
            Home
          </Link>
          <Link to='/about' className='text-white hover:underline'>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
