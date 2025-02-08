import DetailCard from "../components/DetailCard";
import { useMovieContext } from "../context/MovieContext";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

function MovieDetails() {
  const { isDarkMode } = useTheme();
  const { selectedMovie, setSelectedMovie } = useMovieContext();
  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div className="dark:bg-gray-900 min-h-screen">
        <div className="pt-24">
          <DetailCard movie={selectedMovie} />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
