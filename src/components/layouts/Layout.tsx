import { Outlet } from 'react-router-dom';
import HeaderHoc from '../../hoc/HeaderHOC';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <>
      <HeaderHoc />
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
