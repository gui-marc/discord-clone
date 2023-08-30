import { Editor } from '@tiptap/core';
import { useCurrentEditor } from '@tiptap/react';
import {
  AtSign,
  Bold,
  Italic,
  List,
  Paperclip,
  SendHorizonal,
  Smile,
  Strikethrough,
} from 'lucide-react';

import styles from './styles.module.scss';

export default function MenuBar({ onSubmit }: { onSubmit: (editor: Editor) => void }) {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className={styles.tools}>
      <div className={styles.typography}>
        <button type="button" className={styles['tool__icon']}>
          <Paperclip size={20} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          type="button"
          className={`${styles['tool__icon']} ${
            editor.isActive('bold') ? styles['tool__icon--toggle'] : ''
          }`}
        >
          <Bold size={20} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          type="button"
          className={`${styles['tool__icon']} ${
            editor.isActive('italic') ? styles['tool__icon--toggle'] : ''
          }`}
        >
          <Italic size={20} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          type="button"
          className={`${styles['tool__icon']} ${
            editor.isActive('strike') ? styles['tool__icon--toggle'] : ''
          }`}
        >
          <Strikethrough size={20} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          type="button"
          className={`${styles['tool__icon']} ${
            editor.isActive('bulletList') ? styles['tool__icon--toggle'] : ''
          }`}
        >
          <List size={20} />
        </button>
      </div>
      <div className={styles.inserts}>
        {/* Todo: make this work */}
        <button type="button" className={styles['tool__icon']}>
          <AtSign size={20} />
        </button>
        {/* Todo: make this work */}
        <button type="button" className={styles['tool__icon']}>
          <Smile size={20} />
        </button>
        <button
          onClick={() => onSubmit(editor)}
          type="button"
          className={`${styles['tool__icon']} ${styles['tool__submit']}`}
        >
          <SendHorizonal size={20} />
        </button>
      </div>
    </div>
  );
}
