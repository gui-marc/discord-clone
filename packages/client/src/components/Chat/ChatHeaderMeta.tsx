import styles from './styles.module.scss';

export interface ChatHeaderMetaProps {
  children?: React.ReactNode;
}

export default function ChatHeaderMeta({ children }: ChatHeaderMetaProps) {
  return <div className={styles['chat__header__meta']}>{children}</div>;
}
