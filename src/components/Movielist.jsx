import React from 'react';
import Moviecard from './Moviecard';

const Movielist = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-4 md:px-6 relative z-10">
      <h1 className="text-lg md:text-2xl font-bold text-white py-2 md:py-4">{title}</h1>

      <div className="flex overflow-x-auto gap-4 scrollbar-hide pb-4">
        {movies.map((movie) => (
          <Moviecard key={movie.id} posterpath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default Movielist;
