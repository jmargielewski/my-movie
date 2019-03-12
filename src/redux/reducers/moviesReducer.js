import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_BY_ID_SUCCESS,
} from '../actions/types';

export const INITIAL_STATE = {
  loading: false,
  movieById: null,
  moviesBySearch: null,
  errorMessage: '',
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, loading: true };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, moviesBySearch: action.payload };
    case FETCH_MOVIES_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    case FETCH_MOVIE_BY_ID_SUCCESS:
      return { ...state, loading: false, movieById: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
