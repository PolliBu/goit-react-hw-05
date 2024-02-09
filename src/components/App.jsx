import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import NotFoundPage from '../pages/NotFoundPage';
import MoviesDetailsPage from '../pages/MovieDetailsPage';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:moviesId" element={<MoviesDetailsPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
};
