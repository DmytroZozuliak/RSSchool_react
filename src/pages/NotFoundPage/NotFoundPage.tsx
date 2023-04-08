import { NavLink } from 'react-router-dom';
import MyButton from '../../components/UI/MyButton';
import styles from './notFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>404 Page not found</h1>
      <NavLink to="/">
        <MyButton>Return to Home page</MyButton>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
