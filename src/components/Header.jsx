import React from 'react';
 import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className='absolute z-20 px-20 py-6 bg-gradient-to-b from-black w-full'>
      <img
         className='w-32 md:w-44 lg:w-48'
         src="/image.png"
         alt="VibeFlix Logo"
      />
       

       <div className="text-white text-3xl cursor-pointer hover:opacity-80">
        <FaUserCircle />

      </div>
    </div>
  );
};

export default Header;