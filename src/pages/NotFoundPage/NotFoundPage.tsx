import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './notFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>404 Page not found</h1>
      <NavLink to="/">
        <button>Return to Home page</button>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
