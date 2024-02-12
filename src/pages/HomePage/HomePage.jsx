import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getMovies } from '../../Api';
import PageTitle from '../../components/PageTitle/PageTitle';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function HomePage() {
  const [populars, setPopulars] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const fetchedMovies = await getMovies({ abortController: controller });
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
      <PageTitle>Trending today</PageTitle>
      {error && <ErrorMessage />}
      {populars.length > 0 && <MovieList items={populars} />}
    </div>
  );
}
