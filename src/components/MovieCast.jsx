import { getMowiesCast } from '../Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MoviesCast() {
  const { moviesId } = useParams();
  const [casts, setCasts] = useState(null);

  const defaultImg =
    'https://img.freepik.com/premium-vector/actor-holding-star-trophy-cartoon-icon_24908-10408.jpg';

  useEffect(() => {
    async function fetchCast() {
      try {
        const fetchedCast = await getMowiesCast(moviesId);
        setCasts(fetchedCast);
      } catch (error) {}
    }
    fetchCast();
  }, [moviesId]);
  return (
    <div>
      {casts && (
        <ul>
          {casts.map(cast => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : defaultImg
                }
                width={250}
                alt={cast.title}
              />
              <h4>{cast.name}</h4>
              <p>
                <b>Character: </b>
                {cast.character}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
