import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_BY_ID_SUCCESS,
} from '../actions/types';

export const INITIAL_STATE = {
  loading: false,
  movieById: {
    Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    Awards: 'Won 3 Oscars. Another 85 wins & 128 nominations.',
    BoxOffice: '$749,700,000',
    Country: 'UK, USA',
    DVD: '22 Apr 2010',
    Director: 'James Cameron',
    Genre: 'Action, Adventure, Fantasy, Sci-Fi',
    Language: 'English, Spanish',
    Metascore: '83',
    Plot:
      'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
    Production: '20th Century Fox',
    Rated: 'PG-13',
    Ratings: (3)[
      ({ Source: 'Internet Movie Database', Value: '7.8/10' },
      { Source: 'Rotten Tomatoes', Value: '82%' },
      { Source: 'Metacritic', Value: '83/100' })
    ],
    Released: '18 Dec 2009',
    Response: 'True',
    Runtime: '162 min',
    Title: 'Avatar',
    Type: 'movie',
    Website: 'http://www.avatarmovie.com/',
    Writer: 'James Cameron',
    Year: '2009',
    imdbID: 'tt0499549',
    imdbRating: '7.8',
    imdbVotes: '1,028,378',
  },
  moviesBySearch: {
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
