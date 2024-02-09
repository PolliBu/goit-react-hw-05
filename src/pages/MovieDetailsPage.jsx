import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMowiesId } from '../Api';
import { Link, Outlet } from 'react-router-dom';

export default function MoviesDetailsPage() {
  const { moviesId } = useParams();
  const [movieData, setMovieData] = useState(null);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
          <img
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                : defaultImg
            }
            width={250}
            alt={movieData.title}
          />
          <h2>{movieData.title}</h2>
          {movieData.vote_average > 0 && (
            <div>
              <h3>User Score:</h3>
              <p>{movieData.vote_average.toFixed(0) * 10}%</p>
            </div>
          )}
          <h3>Overview:</h3>
          <p> {movieData.overview}</p>
          <h3>Genres:</h3>
          {movieData.genres && (
            <p>{movieData.genres.map(genre => genre.name).join(' ')}</p>
          )}
        </div>
      )}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            {' '}
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
