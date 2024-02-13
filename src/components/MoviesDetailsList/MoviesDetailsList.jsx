import css from './MovieDetailList.module.css';

const MoviesDetailsList = ({ movieData }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <div className={css.movieCard}>
      <div className={css.moviesPhoto}>
        <img
          className={css.moviesPhotoItem}
          src={
            movieData.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
              : defaultImg
          }
          width={400}
          alt={movieData.title}
        />
      </div>
      <div className={css.moviesInfo}>
        <h2 className={css.moviesTitle}>{movieData.title}</h2>
        {movieData.vote_average > 0 && (
          <div>
            <h3 className={css.moviesSubtitle}>User Score:</h3>
            <p className={css.moviesText}>
              {movieData.vote_average.toFixed(0) * 10}%
            </p>
          </div>
        )}
        {movieData.overview && (
          <div>
            <h3 className={css.moviesSubtitle}>Overview:</h3>
            <p className={css.moviesText}> {movieData.overview}</p>
          </div>
        )}
        {movieData.genres && (
          <div>
            <h3 className={css.moviesSubtitle}>Genres:</h3>
            <p>{movieData.genres.map(genre => genre.name).join(' ')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesDetailsList;
