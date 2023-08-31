import { Link, useLocation } from 'react-router-dom';

import { kFormatter } from '../../utils/k-formatter';
import styles from './styles.module.scss';

export interface GroupSelectorProps {
  serverID: string;
  groupID: string;
  participants: {
    id: string;
    name: string;
  }[];
  unreadMessages?: number;
}

export default function GroupSelector({
  serverID,
  groupID,
  participants,
  unreadMessages = 0,
}: GroupSelectorProps) {
  const location = useLocation();
  const currentLink = `/app/server/${serverID}/group/${groupID}`;
  const isCurrent = location.pathname === currentLink;
  const participantsString = participants.map((participant) => participant.name).join(', ');

  return (
    <Link
      to={currentLink}
      className={`btn ${styles['selector']} ${isCurrent ? 'btn--primary' : 'btn--ghost'}`}
    >
      <span className={styles['selector__participants-count']}>
        {kFormatter(participants.length)}
      </span>
      <span className={styles['selector__text']}>{participantsString}</span>
      {unreadMessages > 0 && (
        <span className={styles['unread-count']}>{kFormatter(unreadMessages)}</span>
      )}
    </Link>
  );
}
