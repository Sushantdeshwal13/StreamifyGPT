import { IMG_CON } from '../utils/Constants';

const Moviecard = ({ posterpath }) => {
  if (!posterpath) return null;

  return (
  <div className="w-28 md:w-36 lg:w-44 xl:w-52 shrink-0 hover:scale-105 transition duration-300">

      <img
        alt="Movie Poster"
        src={IMG_CON + posterpath}
        className="rounded-md w-full h-full object-cover"
      />
    </div>
  );
};

export default Moviecard;
