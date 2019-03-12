import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from '../../components/Movie/Movie';
import Spinner from '../../components/Spinner/Spinner';
import * as actions from '../../redux/actions';
import './moviePage.css';

class MoviePage extends Component {
  componentDidMount() {
    // this.props.fetchMovieById(this.props.match.params.movieId);
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        {movie ? <Movie movie={movie} /> : <Spinner />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movies.movieById,
});

export default connect(
  mapStateToProps,
  actions,
)(MoviePage);
