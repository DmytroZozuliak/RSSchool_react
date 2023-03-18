import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE_PATHS } from '../../constants/routePaths';
import { withRouter, WithRouterProps } from '../../hoc/withRouter';
import { getPathName } from '../../utils/getPathName';
import styles from './header.module.scss';

const buttons = [
  { path: ROUTE_PATHS.homePage, title: 'home' },
  { path: ROUTE_PATHS.aboutPage, title: 'about' },
  { path: ROUTE_PATHS.formPage, title: 'form' },
  { path: ROUTE_PATHS.notFoundPage, title: '404' },
];

class Header extends Component<WithRouterProps> {
  render() {
    const path = getPathName(this.props.location.pathname);

    return (
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.navbar}>
            {buttons.map((el) => (
              <NavLink
                key={el.path}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
                to={el.path}
              >
                {el.title}
              </NavLink>
            ))}

            <span>You are on: {path} page</span>
          </nav>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
