import { Editor } from '@tiptap/core';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorProvider, Extension } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import MenuBar from './MenuBar';
import styles from './styles.module.scss';

import './tiptap.scss';

const SubmitHandler = (onSubmit: (editor: Editor) => void) =>
  Extension.create({
    addKeyboardShortcuts() {
      return {
        Enter: ({ editor }) => {
          onSubmit(editor);
          return true;
        },
      };
    },
  });

const extensions = (onSubmit: (editor: Editor) => void) => [
  SubmitHandler(onSubmit),
  StarterKit,
  Placeholder.configure({
    placeholder: 'Type a message',
  }),
];

export default function MessageBox() {
  function handleSubmit(editor: Editor) {
    // Todo: handle message sending to the backend
    if (editor.isEmpty) {
      return;
    }
    console.log({ html: editor.getHTML() });
    editor.commands.clearContent();
  }

  return (
    <div className={styles.container}>
      <EditorProvider
        slotAfter={<MenuBar onSubmit={handleSubmit} />}
        extensions={extensions(handleSubmit)}
      >
        {''}
      </EditorProvider>
    </div>
  );
}
