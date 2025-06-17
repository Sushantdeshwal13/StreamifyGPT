import {useSelector } from 'react-redux';
import usemovietrailer from '../Hooks/usemovietrailer';


const Videobackground = ({ movieId }) => {
const trailervideos = useSelector(store => store.movies?.trailervideos)
   
  usemovietrailer(movieId);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {trailervideos?.key ? (
      <iframe
        className=" w-full h-full object-cover"
         src={`https://www.youtube.com/embed/${trailervideos?.key}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
        ) : (
           <p className="text-white text-center">Loading trailer...</p>
        )}

    </div>
  );
};

export default Videobackground;
