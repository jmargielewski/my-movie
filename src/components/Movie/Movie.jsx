import React from 'react';
import Table from './Table';
import converTime from '../../utils/converTime';
import './movie.css';

const Movie = ({ movie }) => (
  <div className="movie">
    <div className="movie-poster">
      <img className="poster" src={movie.Poster} alt={movie.Title} />
    </div>
    <div className="movie-details">
      <h2 className="movie-title">{movie.Title}</h2>
      <time className="movie-time">{converTime(movie.Runtime)}</time>
      <p className="movie-plot">{movie.Plot}</p>
      <div className="movie-button">
        <a href={movie.Website} target="blank">
          Website
        </a>
      </div>
      <Table movie={movie} />
    </div>
  </div>
);

export default Movie;
