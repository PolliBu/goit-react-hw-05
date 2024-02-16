import { useLocation, useParams, Outlet } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { getMoviesId } from '../../Api';
import MoviesDetailsList from '../../components/MoviesDetailsList/MoviesDetailsList';
import { GoArrowLeft } from 'react-icons/go';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import BackLink from '../../components/BackLink/BackLink';
import Loader from '../../components/Loader/Loader';
import css from './MoviesDetailsPage.module.css';
import Info from '../../components/Info/Info';

export default function MoviesDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const { moviesId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovies = await getMoviesId(moviesId);
        setMovieData(fetchedMovies);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, [moviesId]);
  return (
    <div className={css.movies}>
      <div className={css.moviesPhoto}>
        {error && <ErrorMessage />}
        {backLinkRef && (
          <BackLink href={backLinkRef.current ?? '/movies'}>
            <GoArrowLeft /> Go back
          </BackLink>
        )}
        {movieData && <MoviesDetailsList movieData={movieData} />}
      </div>
      <Info />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
