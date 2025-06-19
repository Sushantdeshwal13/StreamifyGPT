import React from 'react'
import {useSelector} from "react-redux"
import Movielist from "./Movielist"

const Gptmoviesuggestion = () =>{
  const {movieresults, movienames} = useSelector((store)=> store.gpt);
  if(!movienames) return null;
   

 return (
  <div className='p-4 m-4 bg-opacity-50 bg-black text-white'>
    {movienames.map((name, index) => (
      <Movielist 
      key={index} 
      title={name} 
      movies={movieresults[index]} />
    ))}
  </div>
);
}

export default Gptmoviesuggestion
