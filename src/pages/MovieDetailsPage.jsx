import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMowiesId } from '../Api';

export default function MoviesDetailsPage() {
  const { moviesId } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovies = await getMowiesId(moviesId);
        setMovieData(fetchedMovies);
      } catch (error) {}
    }
    fetchData();
  }, [moviesId]);
  return (
    <div>
      <h2>MoviesDetailsPage:</h2>
      {movieData && (
        <div>
          <p>title:{movieData.title}</p>
          <p>popularity:{movieData.popularity}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            alt={movieData.title}
          />
        </div>
      )}
    </div>
  );
}
