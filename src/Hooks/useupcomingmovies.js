import { API_OPTIONS } from '../utils/Constants'
import { useDispatch } from 'react-redux'
import {addupcomingmovies} from"../utils/Movieslice"
import { useEffect } from 'react';

const useupcomingmovies = () => {

    
  //fetch data from tbdm api and update the story
  const dispatch = useDispatch();

const getupcomingmovies = async () =>{
  const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', 
    API_OPTIONS
  );
  const json = await data.json(); 
  dispatch(addupcomingmovies(json.results));
};

useEffect(()=>{
  getupcomingmovies();

},[]);
};

export default useupcomingmovies;