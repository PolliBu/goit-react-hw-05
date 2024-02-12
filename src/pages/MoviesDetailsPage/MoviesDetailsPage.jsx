import { useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { getMoviesId } from '../../Api';
import { Link, Outlet } from 'react-router-dom';
import MoviesDetailsList from '../../components/MoviesDetailsList/MoviesDetailsList';
import { GoArrowLeft } from 'react-icons/go';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import BackLink from '../../components/BackLink/BackLink';
import Loader from '../../components/Loader/Loader';
import css from './MoviesDetailsPage.module.css';

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
    <div className={css.movies}>
      <div className={css.moviesPhoto}>
        {error && <ErrorMessage />}
        {backLink && (
          <BackLink href={backLinkRef.current ?? '/movies'}>
            {' '}
            <GoArrowLeft /> Go back
          </BackLink>
        )}
        {movieData && <MoviesDetailsList movieData={movieData} />}
      </div>
      <div className={css.moviesInfo}>
        <h3 className={css.moviesInfoTitle}>Additional information</h3>
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
