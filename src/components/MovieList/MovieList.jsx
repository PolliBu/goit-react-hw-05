import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <MovieCard item={item} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
