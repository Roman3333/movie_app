import React, { FC } from "react";

import { Movie } from "../types/types";
import MovieItem from "./MovieItem";

interface MovieListProps {
  movies: Movie[];
}

const MoviesList: FC<MovieListProps> = ({ movies }) => {
  console.log(movies);

  return (
    <>
      {movies.map((movie) => {
        return <MovieItem movie={movie} key={movie.id} />;
      })}
    </>
  );
};

export default MoviesList;
