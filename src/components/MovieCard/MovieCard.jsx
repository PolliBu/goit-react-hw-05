import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './MovieCard.module.css';

const MovieCard = ({ item }) => {
  const location = useLocation();
  return (
    <Link className={css.itemList} to={`/movies/${item.id}`} state={location}>
      {item.title}
    </Link>
  );
};

export default MovieCard;
