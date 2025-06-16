import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";  
import { addtrailervideo } from "../utils/Movieslice";
// This hook fetches the movie trailer based on the movieId and dispatches it to the Redux store

const usemovietrailer = (movieId) => {
     const dispatch = useDispatch();
     const getMovieVideos = async () => {
    try {
      const data = await fetch(
         `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
      );
      const json = await data.json();
      console.log(json); // you’ll see YouTube trailers, teasers etc.
      
      const filterdata = json.results.filter((video)=> video.type === "Trailer");
      const trailer = filterdata.length ? filterdata[0] : json.results[0];
      dispatch(addtrailervideo(trailer))
   
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  useEffect(() => {
    if (movieId) getMovieVideos();
  }, [movieId]);
}

export default usemovietrailer;