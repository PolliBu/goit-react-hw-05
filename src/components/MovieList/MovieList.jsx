import MovieCard from '../MovieCard/MovieCard';
import css from './MovieList.module.css';

const MovieList = ({ items }) => {
  return (
    <div>
      <ul className={css.item}>
        {items.map(item => (
          <li className={css.itemList} key={item.id}>
            <MovieCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
