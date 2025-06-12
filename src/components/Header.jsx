import React from 'react';

const Header = () => {
  return (
    <div className='absolute z-20 px-20 py-6 bg-gradient-to-b from-black w-full'>

      <img
        className='w-32 md:w-44 lg:w-48'
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Header;
