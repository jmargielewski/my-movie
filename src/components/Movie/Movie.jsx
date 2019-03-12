import React from 'react';
import './movie.css';

const Movie = ({ movie }) => (
  <div>
    {console.log(movie)}
    <h2 className="movie-title">{movie.Title}</h2>
    <br />
    <p className="movie-type">{movie.Type}</p>
    <br />
    <p className="movie-type">{movie.BoxOffice}</p>
    <br />
    <p className="movie-type">{movie.Country}</p>
    <br />
    <p className="movie-type">{movie.Director}</p>
    <br />
    <p className="movie-type">{movie.Genre}</p>
    <br />
    <p className="movie-type">{movie.Plot}</p>
    <br />
    <p className="movie-type">{movie.Released}</p>
    <br />
    <p className="movie-type">{movie.Runtime}</p>
    <br />
    <p className="movie-type">{movie.Year}</p>
    <br />
    <p className="movie-type">{movie.imdbRating}</p>
    <br />
    <img src={movie.Poster} alt={movie.Title} />
  </div>
);

export default Movie;
