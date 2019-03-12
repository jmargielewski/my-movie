import axios from 'axios';

// put Your API key here
export const API_KEY = '';

export default axios.create({
  baseURL: 'http://www.omdbapi.com',
});
