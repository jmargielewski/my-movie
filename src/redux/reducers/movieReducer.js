import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from '../actions/types';

export const INITIAL_STATE = {
  loading: false,
  data: {
    Search: [
      {
        Title: 'Avatar',
        Year: '2009',
        imdbID: 'tt0499549',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
      },
      {
        Title: 'Avatar: The Last Airbender',
        Year: '2003–2008',
        imdbID: 'tt0417299',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNzZlZmQyYT…GU2MDg5XkEyXkFqcGdeQXVyMjYxMzY2NDk@._V1_SX300.jpg',
      },
      {
        Title: 'Avatar: The Last Airbender',
        Year: '2006',
        imdbID: 'tt0959552',
        Type: 'game',
        Poster:
          'http://ia.media-imdb.com/images/M/MV5BNjUwNzA5Nzc4N15BMl5BanBnXkFtZTgwNjM1ODY4MDE@._V1_SX300.jpg',
      },
      {
        Title: 'Avatar: The Game',
        Year: '2009',
        imdbID: 'tt1517155',
        Type: 'game',
        Poster:
          'http://ia.media-imdb.com/images/M/MV5BMTYxODI2OTI4MF5BMl5BanBnXkFtZTcwNjI1NzMwMw@@._V1_SX300.jpg',
      },
      {
        Title: "The King's Avatar",
        Year: '2017–',
        imdbID: 'tt6859260',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZjIyMjE5ZD…WFlYWM5XkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_SX300.jpg',
      },
      {
        Title: 'Avatar: Creating the World of Pandora',
        Year: '2010',
        imdbID: 'tt1599280',
        Type: 'movie',
        Poster: 'N/A',
      },
      {
        Title: 'Avatar: The Last Airbender - Into the Inferno',
        Year: '2008',
        imdbID: 'tt1459460',
        Type: 'game',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/M…2Q3YmJkXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg',
      },
      {
        Title: 'The Guild: Do You Wanna Date My Avatar',
        Year: '2009',
        imdbID: 'tt3051150',
        Type: 'movie',
        Poster: 'N/A',
      },
      {
        Title: 'Avatar: The Last Airbender - The Burning Earth',
        Year: '2007',
        imdbID: 'tt1459461',
        Type: 'game',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/M…jQ1M2MyXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg',
      },
    ],
  },
  errorMessage: '',
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, loading: true };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_MOVIES_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
