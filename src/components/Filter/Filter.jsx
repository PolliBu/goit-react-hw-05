const Filter = ({ onChange }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    onChange(evt.target.elements.query.value);
    evt.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Filter;
