export const MoviesDetailsList = ({ movieData }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <div>
      <img
        src={
          movieData.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
            : defaultImg
        }
        width={250}
        alt={movieData.title}
      />
      <h2>{movieData.title}</h2>
      {movieData.vote_average > 0 && (
        <div>
          <h3>User Score:</h3>
          <p>{movieData.vote_average.toFixed(2) * 10}%</p>
        </div>
      )}
      <h3>Overview:</h3>
      <p> {movieData.overview}</p>
      <h3>Genres:</h3>
      {movieData.genres && (
        <p>{movieData.genres.map(genre => genre.name).join(' ')}</p>
      )}
    </div>
  );
};
