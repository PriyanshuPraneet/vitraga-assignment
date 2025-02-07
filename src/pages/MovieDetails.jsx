import DetailCard from "../components/DetailCard";
import { useMovieContext } from "../context/MovieContext";

function MovieDetails() {
  const { selectedMovie, setSelectedMovie } = useMovieContext();
  return (
    <div>
      <DetailCard movie={selectedMovie} />
    </div>
  );
}

export default MovieDetails;
