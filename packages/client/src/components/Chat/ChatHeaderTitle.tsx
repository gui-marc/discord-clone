import styles from './styles.module.scss';

export interface ChatHeaderTitleProps {
  children?: React.ReactNode;
}

export default function ChatHeaderTitle({ children }: ChatHeaderTitleProps) {
  return <div className={styles['chat__header__title']}>{children}</div>;
}
