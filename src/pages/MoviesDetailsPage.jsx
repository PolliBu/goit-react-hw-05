import { useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { getMoviesId } from '../Api';
import { Link, Outlet } from 'react-router-dom';
import MoviesDetailsList from '../components/MoviesDetailsList/MoviesDetailsList';
import PageTitle from '../components/PageTitle/PageTitle';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import BackLink from '../components/BackLink/BackLink';
import Loader from '../components/Loader/Loader';

export default function MoviesDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  const backLink = location.state?.from ?? '/';
  const { moviesId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovies = await getMoviesId(moviesId);
        setMovieData(fetchedMovies);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    fetchData();
  }, [moviesId]);
  return (
    <div>
      {error && <ErrorMessage />}
      <PageTitle>MoviesDetailsPage:</PageTitle>
      {backLink && (
        <BackLink href={backLinkRef.current ?? '/movies'}>
          Back to all movies
        </BackLink>
      )}
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
