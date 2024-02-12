import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Info.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Info = () => {
  return (
    <div className={css.moviesInfo}>
      <h3 className={css.moviesInfoTitle}>Additional information</h3>
      <ul>
        <li>
          <NavLink className={buildLinkClass} to="cast">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Info;
