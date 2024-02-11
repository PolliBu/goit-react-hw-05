import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesId } from '../Api';
import { Link, Outlet } from 'react-router-dom';
import { MoviesDetailsList } from '../components/MoviesDetailsList/MoviesDetailsList';
import { PageTitle } from '../components/PageTitle/PageTitle';

export default function MoviesDetailsPage() {
  const location = useLocation();
  const { moviesId } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovies = await getMoviesId(moviesId);
        setMovieData(fetchedMovies);
      } catch (error) {}
    }
    fetchData();
  }, [moviesId]);
  return (
    <div>
      <PageTitle>MoviesDetailsPage:</PageTitle>
      <Link to={location.state ?? '/movies'}>Back to all movies</Link>
      {movieData && <MoviesDetailsList movieData={movieData} />}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
