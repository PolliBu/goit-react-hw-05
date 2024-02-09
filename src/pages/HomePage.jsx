import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMowies } from '../Api';

export default function HomePage() {
  const [populars, setPopulars] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const fetchedMovies = await getMowies({ abortController: controller });
        setPopulars(fetchedMovies.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>OOOOPS! ERROR!</p>}
      {populars.length > 0 && (
        <ul>
          {populars.map(popular => (
            <li key={popular.id}>
              <Link to={`/movies/${popular.id}`}>{popular.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
