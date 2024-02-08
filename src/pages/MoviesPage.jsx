import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = 'aa67eebd48ac511a9341a7e51636c98a';

    const fetchData = async query => {
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

      const options = {
        params: {
          api_key: API_KEY,
        },
      };

      try {
        const response = await axios.get(url, options);
        setMovies(response.data);
      } catch (error) {
        console.error("This didn't work.");
        throw error;
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>Movies</p>
    </div>
  );
}
