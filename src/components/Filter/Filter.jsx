export const Filter = ({ value, onChange }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    onChange(evt.target.elements.query.value);
    evt.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          name="query"
          onChange={evt => onChange(evt.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

// import { HiSearch } from 'react-icons/hi';
// import css from './SearchBox.module.css';

// export const SearchBox = ({ value, onChange }) => {
//   return (
//     <div className={css.wrapper}>
//       <HiSearch className={css.icon} />
//       <input
//         className={css.input}
//         type="text"
//         value={value}
//         onChange={e => onChange(e.target.value)}
//       />
//     </div>
//   );
// };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     setSearchParams({ username: form.elements.username.value });
//       form.reset();

// <form onSubmit={handleSubmit}>
//   <input type="text" name="username" />
//   <button type="submit">Search</button>
// </form>;
