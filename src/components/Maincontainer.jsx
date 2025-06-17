import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle'
import Videobackground from './Videobackground'

const Maincontainer = () => {
    const movies = useSelector(store => store.movies?.nowplayingmovies)
    if(!movies) return;
    const mainmovie = movies[0];
   
    const {original_title, overview, id} = mainmovie;
  
    return (
     <div className="relative w-full h-[100vh]  overflow-hidden">
      {/* Background Video */}
      <Videobackground movieId={id} />

      {/* Title Content Over Video */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center bg-gradient-to-r from-black via-transparent to-transparent">
        <Videotitle title={original_title} overview={overview} />
      </div>
    </div>
  )
}

export default Maincontainer
