import { Outlet } from 'react-router-dom';

import { ChevronDown, Search } from 'lucide-react';

import styles from './styles.module.scss';

export default function ServerPage() {
  return (
    <>
      <aside className={styles['server-bar']}>
        <button className={styles['server-bar__header']}>
          <h3 className="text--medium text--uppercase text--spaced text--sm">SERVER NAME</h3>
          <span className="text--primary">
            <ChevronDown />
          </span>
        </button>
        <form className={styles['server-bar__search']}>
          <button className={styles['server-bar__search-icon']}>
            <Search />
          </button>
          <input className={styles['server-bar__search-input']} type="text" placeholder="Search" />
        </form>
      </aside>
      <div className={styles['server-outlet']}>
        <Outlet />
      </div>
    </>
  );
}
