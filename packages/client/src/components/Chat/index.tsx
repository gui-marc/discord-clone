import ChatBody from './ChatBody';
import ChatHeader from './ChatHeader';
import ChatHeaderMeta from './ChatHeaderMeta';
import ChatHeaderTitle from './ChatHeaderTitle';
import styles from './styles.module.scss';

export interface ChatProps {
  children?: React.ReactNode;
}

function Chat({ children }: ChatProps) {
  return <div className={styles['chat']}>{children}</div>;
}

Chat.Header = ChatHeader;
Chat.HeaderTitle = ChatHeaderTitle;
Chat.HeaderMeta = ChatHeaderMeta;
Chat.Body = ChatBody;

export default Chat;
