import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../../components/Search/Search';
import Spinner from '../../components/Spinner/Spinner';
import MovieList from '../../components/MovieList/MovieList';
import * as actions from '../../redux/actions';
import searchingConfiguration from './searchingConfiguration';
import './searchPage.css';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.filters = {
      ...Object.assign(
        {},
        ...Object.keys(searchingConfiguration).map(key => ({ [key]: '' })),
      ),
    };

    this.state = {
      ...this.filters,
    };
  }

  componentDidMount() {}

  onMovieClick = (movieId) => {
    const { history } = this.props;
    history.push(`/${movieId}`);
  };

  onChange = (e, filter) => {
    this.setState({ [filter]: e.target.value }, () => this.fetchMovies());
  };

  fetchMovies = () => {
    const { fetchMovies } = this.props;
    const data = Object.assign({}, this.state);

    Object.keys(data).forEach((key) => {
      if (!data[key]) delete data[key];
    });

    fetchMovies(data);
  };

  render() {
    const { movies, loading } = this.props;

    return (
      <div>
        <Search
          onChange={this.onChange}
          values={this.state}
          filters={searchingConfiguration}
        />
        <hr />
        {movies && (
          <div>
            {movies.Error && <p>{movies.Error}</p>}
            {movies.Search && (
              <MovieList movies={movies.Search} onClick={this.onMovieClick} />
            )}
          </div>
        )}
        {loading && <Spinner />}
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
