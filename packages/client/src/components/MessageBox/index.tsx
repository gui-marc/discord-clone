import Placeholder from '@tiptap/extension-placeholder';
import { EditorProvider, Extension } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import MenuBar from './MenuBar';
import styles from './styles.module.scss';

import './tiptap.scss';

const SubmitHandler = (onSubmit: (html: string) => void) =>
  Extension.create({
    addKeyboardShortcuts() {
      return {
        Enter: ({ editor }) => {
          onSubmit(editor.getHTML());
          editor.commands.clearContent();
          return true;
        },
      };
    },
  });

const extensions = (onSubmit: (html: string) => void) => [
  SubmitHandler(onSubmit),
  StarterKit,
  Placeholder.configure({
    placeholder: 'Type a message',
  }),
];

export default function MessageBox() {
  function handleSubmit(html: string) {
    console.log({ html });
  }

  return (
    <form className={styles.container}>
      <EditorProvider
        slotAfter={<MenuBar onSubmit={handleSubmit} />}
        extensions={extensions(handleSubmit)}
      >
        {''}
      </EditorProvider>
    </form>
  );
}
