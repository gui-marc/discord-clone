import * as Accordion from '@radix-ui/react-accordion';
import { ChevronRight, Plus } from 'lucide-react';

import styles from './styles.module.scss';

export interface ServerBarItemAccordionProps {
  name: string;
  children?: React.ReactNode;
}

export default function ServerBarItemAccordion({ name, children }: ServerBarItemAccordionProps) {
  return (
    <Accordion.Item value={name} className="server-bar__item">
      <div className={styles['server-bar__item-wrapper']}>
        <Accordion.Trigger className={styles['server-bar__item-header']}>
          <ChevronRight size={20} className={styles['server-bar__item-chevron']} />
          <p className="text--sm text--subtle text--uppercase text--medium">{name}</p>
        </Accordion.Trigger>
        <button className={styles['server-bar__item-add']}>
          <Plus size={20} />
        </button>
      </div>
      <Accordion.Content className={styles['server-bar__item-content']}>
        {children}
      </Accordion.Content>
    </Accordion.Item>
  );
}
