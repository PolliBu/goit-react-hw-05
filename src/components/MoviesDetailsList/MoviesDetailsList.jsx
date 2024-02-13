import css from './MovieDetailList.module.css';

const MoviesDetailsList = ({ movieData }) => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
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
