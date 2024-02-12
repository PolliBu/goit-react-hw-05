import css from './Filter.module.css';

const Filter = ({ onChange }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    onChange(evt.target.elements.query.value);
    evt.target.reset();
  };
  return (
    <div className={css.form}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          placeholder="enter the name of the movie"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Filter;
