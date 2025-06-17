import { API_OPTIONS } from '../utils/Constants'
import { useDispatch } from 'react-redux'
import {addnowplayingmovies} from"../utils/Movieslice"
import { useEffect } from 'react';

const usenowplayingmovies = () => {

    
  //fetch data from tbdm api and update the story
  const dispatch = useDispatch();

const getnowplayingmovies = async () =>{
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
    API_OPTIONS
  );
  const json = await data.json(); 
  dispatch(addnowplayingmovies(json.results));
};

useEffect(()=>{
  getnowplayingmovies();

},[]);
};

export default usenowplayingmovies;