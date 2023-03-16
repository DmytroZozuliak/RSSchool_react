import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getPathName } from '../../utils/getPathName';
import styles from './header.module.scss';

const buttons = [
  { path: '/', title: 'home' },
  { path: '/about', title: 'about' },
  { path: '*', title: '404' },
];
interface Props {
  path: string;
}

export default class Header extends Component<Props> {
  render() {
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
                onClick={() => this.setState({ path: getPathName(window.location.pathname) })}
              >
                {el.title}
              </NavLink>
            ))}

            <span>You are on: {this.props.path} page</span>
          </nav>
        </div>
      </header>
    );
  }
}
