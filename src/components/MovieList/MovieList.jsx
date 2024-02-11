import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MovieList = ({ items }) => {
  const location = useLocation();
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={location}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
