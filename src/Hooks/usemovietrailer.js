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

      // 👇 Custom filter logic
      const officialTrailer = json.results.find(
        (video) =>
          video.type === "Trailer" &&
          video.official === true &&
          video.site === "YouTube"
      );

      // 👇 If not found, fallback to first YouTube trailer
      const fallbackTrailer = json.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );

      const trailer = officialTrailer || fallbackTrailer;

      dispatch(addtrailervideo(trailer));
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  useEffect(() => {
    if (movieId) getMovieVideos();
  }, [movieId]);
};


export default usemovietrailer;