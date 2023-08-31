import styles from './styles.module.scss';

export interface ChatHeaderProps {
  children?: React.ReactNode;
}

export default function ChatHeader({ children }: ChatHeaderProps) {
  return <header className={styles['chat__header']}>{children}</header>;
}
