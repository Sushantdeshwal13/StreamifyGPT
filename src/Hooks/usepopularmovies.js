import { API_OPTIONS } from '../utils/Constants'
import { useDispatch } from 'react-redux'
import {addpopularmovies} from"../utils/Movieslice"
import { useEffect } from 'react';

const usepopularmovies = () => {

    
  //fetch data from tbdm api and update the story
  const dispatch = useDispatch();

const getpopularmovies = async () =>{
  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', 
    API_OPTIONS
  );
  const json = await data.json(); 
  dispatch(addpopularmovies(json.results));
};

useEffect(()=>{
  getpopularmovies();

},[]);
};

export default usepopularmovies;