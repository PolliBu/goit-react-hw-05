import css from './PageTitle.module.css';
import { BiSolidCameraMovie } from 'react-icons/bi';

const PageTitle = () => {
  return (
    <h1 className={css.title}>
      <BiSolidCameraMovie className={css.icon} /> Trending today
    </h1>
  );
};

export default PageTitle;
