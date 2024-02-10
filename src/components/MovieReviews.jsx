import { getMowiesReviews } from '../Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieReviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const fetchedReviews = await getMowiesReviews(moviesId);
        setReviews(fetchedReviews);
      } catch (error) {}
    }
    fetchReviews();
  }, [moviesId]);
  return (
    <div>
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
      {reviews == 0 && <p>We don't have any reviews for this movie</p>}
    </div>
  );
}
