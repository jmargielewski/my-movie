import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import MovieList from '../MovieList/MovieList';
import './main.css';

class Main extends Component {
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
      <div className="site-content">
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
          placeholder="write title"
        />
        <div>
          <h2>list below</h2>

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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.data,
  loading: state.movies.loading,
});

export default connect(
  mapStateToProps,
  actions,
)(Main);
