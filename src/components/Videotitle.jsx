const Videotitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent text-white px-4 md:px-12 pt-36">
      <h1 className="text-2xl md:text-5xl font-bold max-w-3xl">{title}</h1>
      <p className="py-4 text-sm md:text-lg max-w-md">{overview}</p>
      <div className="flex gap-4 mt-4 flex-wrap">
        <button className="bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-600">
          More Info
        </button>
      </div>
    </div>
  );
};


export default Videotitle;
