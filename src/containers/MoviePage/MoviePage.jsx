import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from '../../components/Movie/Movie';
import Spinner from '../../components/Spinner/Spinner';
import * as actions from '../../redux/actions';
import './moviePage.css';

class MoviePage extends Component {
  componentDidMount() {
    const { fetchMovieById, match } = this.props;
    fetchMovieById(match.params.movieId);
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="card">
        {movie ? <Movie movie={movie} /> : <Spinner />}
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  movie: movies.movieById,
});

export default connect(
  mapStateToProps,
  actions,
)(MoviePage);
