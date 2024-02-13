import { getMoviesCast } from '../../Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './MovieCast.module.css';

export default function MoviesCast() {
  const { moviesId } = useParams();
  const [casts, setCasts] = useState(null);
  const [error, setError] = useState(false);

  const defaultImg =
    'https://img.freepik.com/premium-vector/actor-holding-star-trophy-cartoon-icon_24908-10408.jpg';

  useEffect(() => {
    if (!moviesId) return;
    async function fetchCast() {
      try {
        const fetchedCast = await getMoviesCast(moviesId);
        setCasts(fetchedCast);
      } catch (error) {
        setError(true);
      }
    }
    fetchCast();
  }, [moviesId]);
  return (
    <div className={css.mowieCast}>
      {error && <ErrorMessage />}
      {casts && (
        <ul className={css.mowieCastList}>
          {casts.map(cast => (
            <li className={css.mowieCastItem} key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : defaultImg
                }
                width={250}
                height={375}
                alt={cast.title}
              />
              <h4 className={css.mowieCastName}>{cast.name}</h4>
              {cast.character && (
                <p className={css.mowieCastCharacter}>
                  <b>Character: </b>
                  {cast.character}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
