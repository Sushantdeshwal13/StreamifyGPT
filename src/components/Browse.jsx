import Header from './Header'
import usenowplayingmovies from '../Hooks/usenowplayingmovies'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import usepopularmovies from '../Hooks/usepopularmovies.js'
import useupcomingmovies from '../Hooks/useupcomingmovies.js'
import GPTsearch from './GPTsearchpage.jsx'
import { useSelector } from 'react-redux';

const Browse = () => {
 
   const showgptsearch = useSelector(store => store.gpt.showgptsearch)
   
  usenowplayingmovies();
  usepopularmovies();
  useupcomingmovies();

  return (
    <div>
      <Header/>
      {
        showgptsearch ? <GPTsearch/> : 
        <>
        <Maincontainer/>
        <Secondarycontainer/>
        </>
      }
      
      {/*
         -Maincontainer
             - videobackground
             - videotitle
          secondarycontainer
             - MovieList * n
               -cards * n
    */}


    </div>
  )
}

export default Browse
