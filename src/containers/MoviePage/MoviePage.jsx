import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './moviePage.css';

class MoviePage extends PureComponent {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <h2 className="movie-title">{movie.Title}</h2>
        <p className="movie-type">{movie.Type}</p>
        <p className="movie-type">{movie.Year}</p>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.movieId;
  return {
    movie: state.movies.data.Search.find(({ imdbID }) => imdbID === id),
  };
};

export default connect(mapStateToProps)(MoviePage);
