import styles from './styles.module.scss';

export interface AvatarProps {
  userName: string;
  avatarURL?: string;
  size?: 'small' | 'medium' | 'large';
  groupabble?: boolean;
}

export default function Avatar({
  userName,
  avatarURL,
  size = 'medium',
  groupabble = false,
}: AvatarProps) {
  const userInitials = userName
    .split(' ')
    .map((name) => name[0])
    .join('');

  if (!avatarURL) {
    return (
      <div
        className={`${styles['avatar']} ${styles[`avatar--${size}`]} ${
          groupabble ? styles['avatar--groupabble'] : ''
        }`}
      >
        <span className={styles['avatar__initials']}>{userInitials}</span>
        <span className="sr-only">{userName}</span>
      </div>
    );
  }

  return (
    <div className={`${styles['avatar']} ${styles[`avatar--${size}`]}`}>
      <img className={styles['avatar__image']} src={avatarURL} />
      <span className="sr-only">{userName}</span>
    </div>
  );
}
