import React from 'react';

const Header = () => {
  return (
    <div className='h-24 bg-slate-800 flex items-center  px-4'>
      <div className="flex items-center">
        <img className='h-[33px]' src="https://res.cloudinary.com/dlb4xmxr0/image/upload/v1685259903/logo_vfi9xq.png" alt="Logo" />
      </div>
      <ul className="flex flex-row justify-between space-x-4">
        <li><a href="#health" className="text-white hover:text-gray-300">Health</a></li>
        <li><a href="#sports" className="text-white hover:text-gray-300">Sports</a></li>
        <li><a href="#business" className="text-white hover:text-gray-300">Business</a></li>
        <li><a href="#political" className="text-white hover:text-gray-300">Political</a></li>
        {/* You can add more items as needed */}
      </ul>
    </div>
  );
};

export default Header;
