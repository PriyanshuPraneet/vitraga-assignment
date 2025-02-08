import { useEffect, useState } from "react";
import { getDesc } from "../services/api";
import { useMovieContext } from "../context/MovieContext";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

function DetailCard({ movie }) {
  const [desc, setDesc] = useState([]);
  const { isDarkMode } = useTheme();
  const { selectedMovie, setSelectedMovie } = useMovieContext();

  useEffect(() => {
    const loadDesc = async () => {
      try {
        const data = await getDesc(movie);
        setDesc(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadDesc();
  }, [selectedMovie]);

  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div className="flex items-start p-6 space-x-8 bg-gray-100 rounded-xl shadow-lg max-w-4xl mx-auto mt-12 dark:bg-gray-800">
        {/* Movie Image (Now on the left side) */}
        <div className="w-1/3 h-auto overflow-hidden rounded-lg shadow-xl transform transition duration-300 hover:scale-105">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Movie Info (Title, Tagline, Description) */}
        <div className="flex-1 dark:text-white">
          {/* Movie Title */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2 hover:text-blue-600 transition duration-200 dark:text-white">
            {movie.title}
          </h2>

          {/* Movie Tagline */}
          <h5 className="text-xl text-gray-500 mt-2 italic dark:text-gray-400">
            {desc["tagline"] ? desc["tagline"] : "No tagline available"}
          </h5>

          {/* Movie Description */}
          <p className="text-lg text-gray-700 mt-4 dark:text-gray-300">
            {desc["overview"] ? desc["overview"] : "Loading description..."}
          </p>

          {/* Movie Additional Information (Language, Type, Runtime, Rating) */}
          <div className="flex flex-wrap space-x-6 mt-4 dark:text-gray-300">
            {/* Language and Type Info */}
            <div className="flex flex-col space-y-2">
              <p className="text-md text-gray-600 flex items-center dark:text-gray-300">
                <span className="mr-2 text-xl">🌐</span>
                Language: {desc["original_language"]}
              </p>
              <p className="text-md text-gray-600 flex items-center dark:text-gray-300">
                <span className="mr-2 text-xl">🎞</span>
                Type: Movie
              </p>
            </div>

            {/* Runtime and Rating Info */}
            <div className="flex flex-col space-y-2">
              <p className="text-md text-gray-600 flex items-center dark:text-gray-300">
                <span className="mr-2 text-xl">🕓</span>
                Runtime: {desc["runtime"]} min
              </p>
              <p className="text-md text-gray-600 flex items-center dark:text-gray-300">
                <span className="mr-2 text-xl">🎥</span>
                Rating: {desc["vote_average"]?.toFixed(2)}/10
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
