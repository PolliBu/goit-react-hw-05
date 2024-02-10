import { Link } from 'react-router-dom';

export const HomeList = ({ populars }) => {
  return (
    <ul>
      {populars.map(popular => (
        <li key={popular.id}>
          <Link to={`/movies/${popular.id}`}>{popular.title}</Link>
        </li>
      ))}
    </ul>
  );
};
