import { Outlet } from 'react-router-dom';
import Menu from '../components/pages/Menu';
import styles from './MainLayout.module.css';

function MainLayout() {
  return (
    <div className={styles.mainLayout}>
      <Menu />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
