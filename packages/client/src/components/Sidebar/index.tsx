import { Link } from 'react-router-dom';

import { Bell, User2, Search, MessageCircle, Settings2 } from 'lucide-react';

import styles from './styles.module.scss';

export default function Sidebar() {
  return (
    <aside className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/search" className="btn btn--icon btn--ghost">
          <Search />
        </Link>
        <Link to="/server " className="btn btn--icon btn--primary">
          <MessageCircle />
        </Link>
        <Link to="/settings" className="btn btn--icon btn--ghost">
          <Settings2 />
        </Link>
      </nav>
      <div className={styles.options}>
        <button className="btn btn--icon btn--ghost">
          <Bell />
        </button>
        <button className="btn btn--icon btn--ghost">
          <User2 />
        </button>
      </div>
    </aside>
  );
}
