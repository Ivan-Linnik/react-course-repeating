import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

function Menu() {
  return (
    <nav className={styles.nav}>
      <NavLink to=".." relative="path" end>
        Home
      </NavLink>
      <NavLink to="/todo" relative="path">
        Todo App
      </NavLink>
      <NavLink to="/courses" relative="path">
        Courses
      </NavLink>
      <NavLink to="/contacts" relative="path">
        Contacts
      </NavLink>
    </nav>
  );
}

export default Menu;
