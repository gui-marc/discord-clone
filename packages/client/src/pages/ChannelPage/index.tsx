import { Hash } from 'lucide-react';

import styles from './styles.module.scss';

export default function ChannelPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles['header__title']}>
          <Hash />
          <h1>Channel</h1>
        </div>
        <div className={styles['header__meta'] + ' text--sm'}>
          <div className={styles['header__meta__avatars']}>
            <div className={styles['header__meta__avatars__avatar']}></div>
            <div className={styles['header__meta__avatars__avatar']}></div>
            <div className={styles['header__meta__avatars__avatar']}></div>
          </div>
          <span className="text--sublte">·</span>
          <span className="text--sublte">43 members</span>
          <span className="text--sublte">·</span>
          <span className={styles['header__meta__online-count'] + ' text--medium'}>12 online</span>
        </div>
      </header>
    </div>
  );
}
