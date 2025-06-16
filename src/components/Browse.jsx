import Header from './Header'
import usenowplayingmovies from '../Hooks/usenowplayingmovies'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';

const Browse = () => {

  usenowplayingmovies();
  return (
    <div>
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
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
