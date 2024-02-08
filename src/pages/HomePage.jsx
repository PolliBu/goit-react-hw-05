import axios from 'axios';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [populars, setPopulars] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const API_KEY = 'aa67eebd48ac511a9341a7e51636c98a';
      const url =
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
      const options = {
        params: {
          api_key: API_KEY,
        },
      };
      try {
        const response = await axios.get(url, options);
        setPopulars(response.data.results);
      } catch (error) {
        console.error("This didn't work.");
        throw error;
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {populars.length > 0 && (
        <ul>
          {populars.map(popular => (
            <li key={popular.id}>
              <p>{popular.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
