import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import MovieList from '../../components/MovieList/MovieList';
import './searchPage.css';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  componentDidMount() {}

  onMovieClick = (movieId) => {
    this.props.history.push(`/${movieId}`);
  };

  onChange = (e) => {
    this.setState({ value: e.target.value });
    // this.props.fetchMovies(e.target.value);
  };

  render() {
    const {
      movies,
      loading,
      movies: { Error: error, Search },
    } = this.props;

    console.log(movies);
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
          placeholder="write title"
        />
        <hr />
        {movies && (
          <div>
            {loading && <p>loading...</p>}
            {error && <p>{error}</p>}
            {Search && (
              <MovieList movies={Search} onClick={this.onMovieClick} />
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.moviesBySearch,
  loading: state.movies.loading,
});

export default connect(
  mapStateToProps,
  actions,
)(SearchPage);
