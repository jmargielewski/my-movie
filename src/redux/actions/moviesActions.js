import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_BY_ID_SUCCESS,
} from './types';
import OMDbApi, { API_KEY } from '../../api/OMDbApi';
import serialize from '../../utils/serialize';

const fetchMovieByIdSuccess = response => ({
  type: FETCH_MOVIE_BY_ID_SUCCESS,
  payload: response,
});

const fetchMoviesSuccess = response => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: response,
});

const fetchMoviesFailure = err => ({
  type: FETCH_MOVIES_FAILURE,
  payload: err,
});

export const fetchMovies = data => async (dispatch) => {
  dispatch({ type: FETCH_MOVIES });
  try {
    const response = await OMDbApi.get(`/${serialize(data)}&apikey=${API_KEY}`);
    if (response.status === 200) {
      dispatch(fetchMoviesSuccess(response.data));
    } else {
      console.error('ERROR');
    }
  } catch (err) {
    dispatch(fetchMoviesFailure(err));
  }
};

export const fetchMovieById = id => async (dispatch) => {
  dispatch({ type: FETCH_MOVIES });
  try {
    const response = await OMDbApi.get(`/?i=${id}&apikey=${API_KEY}`);
    if (response.status === 200) {
      dispatch(fetchMovieByIdSuccess(response.data));
    } else {
      console.error('ERROR');
    }
  } catch (err) {
    dispatch(fetchMoviesFailure(err));
  }
};
