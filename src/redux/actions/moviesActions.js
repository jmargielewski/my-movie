import axios from 'axios';
import {
  API_KEY,
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from './types';

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
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${data}&apikey=${API_KEY}`,
    );
    if (response.status === 200) {
      dispatch(fetchMoviesSuccess(response.data));
    } else {
      console.error('ERROR');
    }
  } catch (err) {
    dispatch(fetchMoviesFailure(err));
  }
};
