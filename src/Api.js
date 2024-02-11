import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'aa67eebd48ac511a9341a7e51636c98a';

export const getMovies = async ({ abortController }) => {
  const response = await axios.get(
    `/trending/movie/day?language=en-US&api_key=${API_KEY}`,
    {
      signal: abortController.signal,
    },
  );

  return response.data;
};
export const getMoviesId = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}?language=en-US&api_key=${API_KEY}`,
  );

  return response.data;
};

export const getMoviesCast = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/credits?language=en-US&api_key=${API_KEY}`,
  );

  return response.data.cast;
};

export const getMoviesReviews = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/reviews?language=en-US&page=1&api_key=${API_KEY}`,
  );

  return response.data.results;
};

export const getSearchMovie = async query => {
  const response = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`,
  );

  return response.data.results;
};
