import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowplayingmovies && (
      <>
        {/* Overlapping Section */}

        <div className='relative -mt-60 z-20'>
          <Movielist title={"Now Playing"} movies={movies.nowplayingmovies} />
          <Movielist title={"Upcoming Movies"} movies={movies.upcomingmovies} />
          <Movielist title={"Popular"} movies={movies.popularmovies} />
          <Movielist title={"Trending"} movies={movies.nowplayingmovies} />
        </div>

      </>
    )
  )
}

export default Secondarycontainer
