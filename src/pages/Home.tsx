import React, { useState, useEffect, FC } from "react";
import axios from "axios";

import { Movie } from "../types/types";
import MoviesList from "../components/MoviesList";

const Home: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getmovies = async () => {
    const response = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    setMovies(response.data.data.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getmovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Загрузка...</span>
        </div>
      ) : (
        <div className="movies">
          <MoviesList movies={movies} />
        </div>
      )}
    </>
  );
};

export default Home;
