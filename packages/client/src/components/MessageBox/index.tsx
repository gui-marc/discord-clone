import { useRef, useState } from 'react';

import {
  Smile,
  AtSign,
  Bold,
  Italic,
  Paperclip,
  Strikethrough,
  List,
  SendHorizonal,
} from 'lucide-react';

import useAutosizeTextArea from '../../hooks/useAutosizeTextArea';
import styles from './styles.module.scss';

export default function MessageBox() {
  const [value, setValue] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  return (
    <form className={styles.container}>
      <textarea
        ref={textAreaRef}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="false"
        spellCheck="true"
        dir="auto"
        className={styles.input}
        placeholder="Type a message"
      />
      <div className={styles.tools}>
        <div className={styles.typography}>
          <button type="button" className={styles['tool__icon']}>
            <Paperclip size={20} />
          </button>
          <button type="button" className={styles['tool__icon']}>
            <Italic size={20} />
          </button>
          <button
            type="button"
            className={`${styles['tool__icon']} ${styles['tool__icon--toggle']}`}
          >
            <Bold size={20} />
          </button>
          <button type="button" className={styles['tool__icon']}>
            <Strikethrough size={20} />
          </button>
          <button type="button" className={styles['tool__icon']}>
            <List size={20} />
          </button>
        </div>
        <div className={styles.inserts}>
          <button type="button" className={styles['tool__icon']}>
            <AtSign size={20} />
          </button>
          <button type="button" className={styles['tool__icon']}>
            <Smile size={20} />
          </button>
          <button type="submit" className={`${styles['tool__icon']} ${styles['tool__submit']}`}>
            <SendHorizonal size={20} />
          </button>
        </div>
      </div>
    </form>
  );
}
