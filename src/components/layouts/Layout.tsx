import { Outlet } from 'react-router-dom';
import Header from '../Header';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className={styles.footer}>
        <div className="container">Footer</div>
      </footer>
    </>
  );
};

export default Layout;
