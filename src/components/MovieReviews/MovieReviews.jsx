import { getMoviesReviews } from '../../Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function MovieReviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      if (!moviesId) return;
      try {
        const fetchedReviews = await getMoviesReviews(moviesId);
        setReviews(fetchedReviews);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    fetchReviews();
  }, [moviesId]);
  return (
    <div>
      {error && <ErrorMessage />}
      {reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews == 0 && <p>We do not have any reviews for this movie</p>}
    </div>
  );
}
