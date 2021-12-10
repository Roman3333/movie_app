import React, { FC } from "react";
import { Movie } from "../types/types";

interface MovieProps {
  movie: Movie;
}

const MovieItem: FC<MovieProps> = ({ movie }) => {
  return (
    <div className="movie">
      <img
        src={movie.medium_cover_image}
        alt={movie.title}
        title={movie.title}
      />
      <div className="movie__column">
        <h3 className="movie__title">{movie.title}</h3>
        <h5 className="movie__year">{movie.year}</h5>
        <ul className="movie__genres">
          {movie.genres.map((genre, index) => {
            return (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            );
          })}
        </ul>
        <p className="movie__summary">{movie.summary.slice(0, 140)}...</p>
      </div>
    </div>
  );
};

export default MovieItem;
