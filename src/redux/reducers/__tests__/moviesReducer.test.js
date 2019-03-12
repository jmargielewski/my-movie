import moviesReducer, { INITIAL_STATE } from '../moviesReducer';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_BY_ID_SUCCESS,
} from '../../actions/types';

describe('Movies Reducer', () => {
  it('handles action of unknown type', () => {
    const action = { type: 'UNKNOWN' };
    const newState = moviesReducer(INITIAL_STATE, action);

    expect(newState).toEqual(INITIAL_STATE);
  });

  it('handles action of type FETCH_MOVIES', () => {
    const action = { type: FETCH_MOVIES };
    const newState = moviesReducer(INITIAL_STATE, action);

    expect(newState).toEqual({ ...INITIAL_STATE, loading: true });
  });

  it('handles action of type FETCH_MOVIES_SUCCESS', () => {
    const action = {
      type: FETCH_MOVIES_SUCCESS,
      payload: { a: 'data', b: [1, 2, 3] },
    };
    const newState = moviesReducer(INITIAL_STATE, action);

    expect(newState).toEqual({
      ...INITIAL_STATE,
      moviesBySearch: action.payload,
      loading: false,
    });
  });

  it('handles action of type FETCH_MOVIE_BY_ID_SUCCESS', () => {
    const action = {
      type: FETCH_MOVIE_BY_ID_SUCCESS,
      payload: { a: 'data', b: [1, 2, 3] },
    };
    const newState = moviesReducer(INITIAL_STATE, action);

    expect(newState).toEqual({
      ...INITIAL_STATE,
      movieById: action.payload,
      loading: false,
    });
  });

  it('handles action of type FETCH_MOVIES_FAILURE', () => {
    const action = {
      type: FETCH_MOVIES_FAILURE,
      payload: 'failure',
    };
    const newState = moviesReducer(INITIAL_STATE, action);

    expect(newState).toEqual({
      ...INITIAL_STATE,
      errorMessage: action.payload,
      loading: false,
    });
  });
});
