import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// const API_KEY = 'aa67eebd48ac511a9341a7e51636c98a';
axios.defaults.language = 'en-US';
axios.defaults.headers.accept = 'application/json';
axios.defaults.headers.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY3ZWViZDQ4YWM1MTFhOTM0MWE3ZTUxNjM2Yzk4YSIsInN1YiI6IjY1YzIzYjdjYmJlMWRkMDE3YTJhOGMyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.izAmvO6wNB0gP5oB17nvSrIIjdKuwaEqNfS2F_pmrwM';

export const getMovies = async ({ abortController }) => {
  const response = await axios.get(`/trending/movie/day`, {
    signal: abortController.signal,
  });
  return response.data;
};

export const getMoviesId = async moviesId => {
  const response = await axios.get(`/movie/${moviesId}`);
  return response.data;
};

export const getMoviesCast = async moviesId => {
  const response = await axios.get(`/movie/${moviesId}/credits`);
  return response.data.cast;
};

export const getMoviesReviews = async moviesId => {
  const response = await axios.get(`/movie/${moviesId}/reviews?page=1&`);
  return response.data.results;
};

export const getSearchMovie = async query => {
  const response = await axios.get(
    `/search/movie?query=${query}?&include_adult=false&page=1`,
  );
  return response.data.results;
};
