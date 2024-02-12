import css from './BackLink.module.css';
import { Link } from 'react-router-dom';
const BackLink = ({ href, children }) => {
  return (
    <Link className={css.back} to={href}>
      {children}
    </Link>
  );
};

export default BackLink;
