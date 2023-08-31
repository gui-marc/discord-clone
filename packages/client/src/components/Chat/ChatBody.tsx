import MessageBox from '../MessageBox';
import styles from './styles.module.scss';

export interface ChatBodyProps {
  // todo: add messages prop
  messages: { id: string; content: string }[];
}

export default function ChatBody({ messages }: ChatBodyProps) {
  return (
    <div className={styles['chat__body']}>
      <div className={styles['chat__body__messages']}>
        {messages.map((message) => (
          <div key={message.id} className={styles['chat__body__messages__message']}>
            {message.content}
          </div>
        ))}
      </div>
      <MessageBox />
    </div>
  );
}
