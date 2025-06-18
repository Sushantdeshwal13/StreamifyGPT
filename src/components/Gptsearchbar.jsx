import React, { useRef } from 'react'
import languages from '../utils/languageconst'
import { useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/Constants'

const Gptsearchbar = () => {
   const langkey = useSelector((store)=> store.config.lang);
   const searchtext = useRef(null);

   //search movie in TMDB
   const searchmovietmdb = async (movie) =>{
    const data = await fetch(
     'https://api.themoviedb.org/3/search/movie?query='+
      movie +
     '&include_adult=false&language=en-US&page=1',
      API_OPTIONS
      
    );
    const json = await data.json()
    return json.results;
   }

const handlegptsearchclick = async () => {
  const userInput = searchtext.current.value;

  const gptquery = `Act as a Movie Recommendation system and suggest some movies for the query "${userInput}". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gya`;

  try {
    const getresults = await openai.chat.completions.create({
  messages: [{ role: 'user', content: gptquery }],
  model: "llama3-70b-8192", // ✅ Working Groq-compatible model
});


    const reply = getresults.choices?.[0]?.message?.content;
    console.log("🎬 Recommended Movies:", reply);
    // andaz apna apna, hera pheri, don
    const gptmovies = getresults.choices?.[0]?.message?.content.split(",");
   //["andaz apna apna", "hera pheri", "don"]
    //for each movie i will search imdb api
   
    const promisearray = gptmovies.map((movie) => searchmovietmdb(movie))
    // promise , promise, promise ,prommise, prommise
     const tmdbresults = await Promise.all(promisearray) 
      console.log(tmdbresults);
    // Optional: update your UI state here
  } catch (err) {
    console.error("❌ GPT Search Error: ", err);
    alert("Something went wrong with Groq API.");
  }
};



  return (
    <div className='pt-24 px-4 flex justify-center'>
      <form className="w-full mt-16 max-w-2xl bg-black/80 rounded-lg p-4 flex flex-col sm:flex-row gap-4 shadow-lg"
       onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchtext}
          type="text"
          className='flex-1 px-4 text-white py-2 rounded-md  cursor-pointer'
          placeholder={languages[langkey]?.gptsearchplaceholder}
        />
        <button
          className='bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition cursor-pointer'
           onClick={handlegptsearchclick}>
          {languages[langkey]?.search || 'search'}
        </button>
      </form>
    </div>
  )
}

export default Gptsearchbar
