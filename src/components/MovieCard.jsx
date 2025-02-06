import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);
  function onFavClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <div className="transform transition duration-300 hover:scale-105 rounded-lg shadow-lg w-56 bg-white cursor-pointer">
      {/* Movie Poster */}
      <div className="relative w-full h-80 overflow-hidden rounded-t-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Movie Info */}
      <div className="px-5 pt-4 pb-6 flex flex-col">
        <h2 className="font-semibold text-center text-sm truncate">
          {movie.title}
        </h2>
        <br></br>
        <h4>{movie.release_date?.split("-")[0]}</h4>
        <button
          className="favorite-btn bg-blue-500 text-white px-2 py-1 mt-2 rounded-md transition duration-150 hover:bg-blue-700"
          type="button"
          onClick={onFavClick}
        >
          {favorite ? "Remove from Wishlist" : "Add to WishList"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
