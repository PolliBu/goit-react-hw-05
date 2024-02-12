import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MovieCard = ({ item }) => {
  const location = useLocation();
  return (
    <Link to={`/movies/${item.id}`} state={location}>
      {item.title}
    </Link>
  );
};

export default MovieCard;
