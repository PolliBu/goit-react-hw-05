import { useEffect, useState } from 'react';
import { getSearchMovie } from '../Api';
import { Filter } from '../components/Filter/Filter';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from '../components/MovieList/MovieList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

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
      } catch (error) {}
    }
    fetchData();
  }, [query]);

  // setParams({ username: form.elements.query.value });

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <Filter value={query} onChange={changeFilter} />
      {movies.length > 0 && <MovieList items={filteredMovies} />}
    </div>
  );
}
