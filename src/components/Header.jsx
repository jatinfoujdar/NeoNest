import React from 'react';

const Header = () => {
  return (
    <div className='h-24 bg-slate-800 flex items-center justify-between px-4'>
      <img className='h-[70px] ml-8' src="https://res.cloudinary.com/dlb4xmxr0/image/upload/v1685259903/logo_vfi9xq.png" alt="Logo" />
      <div className="mr-[800px]">
      <ul className="flex flex-row justify-between items-center space-x-4">
        <li><a href="#health" className="text-white hover:text-gray-300">Health</a></li>
        <li><a href="#sports" className="text-white hover:text-gray-300">Sports</a></li>
        <li><a href="#business" className="text-white hover:text-gray-300">Business</a></li>
        <li><a href="#political" className="text-white hover:text-gray-300">Political</a></li>
      </ul>
      </div>
    </div>
  );
};

export default Header;
