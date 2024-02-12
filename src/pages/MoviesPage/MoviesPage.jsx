import { useEffect, useState } from 'react';
import { getSearchMovie } from '../../Api';
import Filter from '../../components/Filter/Filter';
import { useSearchParams, useParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  const changeFilter = query => {
    const nextQuery = query !== '' ? { query } : {};
    setParams(nextQuery);
  };

  useEffect(() => {
    if (query === '') return;
    async function fetchData() {
      try {
        const fetchedMovies = await getSearchMovie(query);
        setMovies(fetchedMovies);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    fetchData();
  }, [query]);

  return (
    <div>
      <Filter value={query} onChange={changeFilter} />
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList items={movies} />}
    </div>
  );
}
