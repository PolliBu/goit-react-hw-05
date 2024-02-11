import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
// import HomePage from '../pages/HomePage';
// import MoviesPage from '../pages/MoviesPage';
// import NotFoundPage from '../pages/NotFoundPage';
// import MoviesDetailsPage from '../pages/MovieDetailsPage';
import MoviesCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const MoviesDetailsPage = lazy(() => import('../pages/MoviesDetailsPage'));

export const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moviesId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<MoviesCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
