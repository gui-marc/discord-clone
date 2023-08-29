import { Outlet } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import styles from './styles.module.scss';

export default function AppRoot() {
  return (
    <div className={styles['app-root']}>
      <Sidebar />
      <main className={styles['container']}>
        <Outlet />
      </main>
    </div>
  );
}
