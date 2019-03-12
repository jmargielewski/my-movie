import React from 'react';
import './movieList.css';

const MovieList = ({ movies, onClick }) => (
  <ul className="movies-list">
    {movies.map(movie => (
      <li
        className="movie-item"
        key={movie.imdbID}
        onClick={() => onClick(movie.imdbID)}
      >
        <div className="movie-card">
          <h2 className="movie-title">{movie.Title}</h2>
          <p className="movie-type">{movie.Type}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default MovieList;
