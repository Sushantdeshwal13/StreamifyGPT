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
    <div className='relative'>
      <Videotitle title={original_title} overview={overview}/>
      <Videobackground movieId = {id}/>
    </div>
  )
}

export default Maincontainer
