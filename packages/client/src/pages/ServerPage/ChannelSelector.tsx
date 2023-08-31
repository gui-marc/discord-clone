import { Link, useLocation } from 'react-router-dom';

import { Hash } from 'lucide-react';

import { kFormatter } from '../../utils/k-formatter';
import styles from './styles.module.scss';

export interface ChannelSelectorProps {
  serverID: string;
  channelName: string;
  channelID: string;
  unreadMessages?: number;
}

export default function ChannelSelector({
  serverID,
  channelID,
  channelName,
  unreadMessages = 0,
}: ChannelSelectorProps) {
  const location = useLocation();
  const currentLink = `/app/server/${serverID}/channel/${channelID}`;
  const isCurrent = location.pathname === currentLink;

  return (
    <Link
      to={currentLink}
      className={`btn ${styles['selector']} ${isCurrent ? 'btn--primary' : 'btn--ghost'}`}
    >
      <Hash size={20} />
      <span className={styles['selector__text']}>{channelName}</span>
      {unreadMessages > 0 && (
        <span className={styles['unread-count']}>{kFormatter(unreadMessages)}</span>
      )}
    </Link>
  );
}
