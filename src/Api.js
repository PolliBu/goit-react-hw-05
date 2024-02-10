import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'aa67eebd48ac511a9341a7e51636c98a';

export const getMowies = async ({ abortController }) => {
  const response = await axios.get(
    `/trending/movie/day?language=en-US&&api_key=${API_KEY}`,
    {
      signal: abortController.signal,
    },
  );

  return response.data;
};
export const getMowiesId = async mowiesId => {
  const response = await axios.get(
    `/movie/${mowiesId}?language=en-US&&api_key=${API_KEY}`,
  );

  return response.data;
};

export const getMowiesCast = async mowiesId => {
  const response = await axios.get(
    `/movie/${mowiesId}/credits?language=en-US&&api_key=${API_KEY}`,
  );

  return response.data.cast;
};
