import { Link, useLocation } from 'react-router-dom';

import Avatar from '../../components/Avatar';
import { kFormatter } from '../../utils/k-formatter';
import styles from './styles.module.scss';

export interface DirectMessageSelectorProps {
  serverID: string;
  user: {
    id: string;
    name: string;
    avatarURL?: string;
  };
  unreadMessages?: number;
}

export default function DirectMessageSelector({
  serverID,
  user: { id: userId, name: userName, avatarURL },
  unreadMessages = 0,
}: DirectMessageSelectorProps) {
  const location = useLocation();
  const currentLink = `/app/server/${serverID}/messages/${userId}`;
  const isCurrent = location.pathname === currentLink;

  return (
    <Link
      to={currentLink}
      className={`btn ${styles['selector']} ${isCurrent ? 'btn--primary' : 'btn--ghost'}`}
    >
      <Avatar userName={userName} size="small" avatarURL={avatarURL} />
      <span className={styles['selector__text']}>{userName}</span>
      {unreadMessages > 0 && (
        <span className={styles['unread-count']}>{kFormatter(unreadMessages)}</span>
      )}
    </Link>
  );
}
