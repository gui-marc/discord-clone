import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, Search } from 'lucide-react';

import ChannelSelector from './ChannelSelector';
import DirectMessageSelector from './DirectMessageSelector';
import GroupSelector from './GroupSelector';
import ServerBarItemAccordion from './ServerBarItemAccordion';
import styles from './styles.module.scss';

export default function ServerPage() {
  return (
    <>
      <aside className={styles['server-bar']}>
        <button className={styles['server-bar__header']}>
          <h3 className="text--medium text--uppercase text--spaced text--sm">SERVER NAME</h3>
          <span className="text--primary">
            <ChevronDown />
          </span>
        </button>
        <form className={styles['server-bar__search']}>
          <button className={styles['server-bar__search-icon']}>
            <Search />
          </button>
          <input className={styles['server-bar__search-input']} type="text" placeholder="Search" />
        </form>
        <Accordion.Root
          defaultValue={['channels', 'favorites', 'direct messages', 'groups']}
          type="multiple"
        >
          <ServerBarItemAccordion name="favorites"></ServerBarItemAccordion>
          <ServerBarItemAccordion name="channels">
            <ChannelSelector
              channelID="1"
              channelName="A very very very very big name"
              serverID="1"
              unreadMessages={19392}
            />
            <ChannelSelector
              channelID="2"
              channelName="Project"
              serverID="1"
              unreadMessages={1500}
            />
            <ChannelSelector channelID="3" channelName="Off-Topic" serverID="1" />
          </ServerBarItemAccordion>
          <ServerBarItemAccordion name="groups">
            <GroupSelector
              serverID="1"
              groupID="1"
              participants={[
                { id: '1', name: 'Guilherme Marcondes' },
                { id: '2', name: 'João Costa' },
                { id: '3', name: 'Guilherme Belchior' },
              ]}
              unreadMessages={3}
            />
          </ServerBarItemAccordion>
          <ServerBarItemAccordion name="direct messages">
            <DirectMessageSelector
              serverID="1"
              user={{ id: '@gui', name: 'Guilherme Marcondes' }}
              unreadMessages={3}
            />
            <DirectMessageSelector serverID="1" user={{ id: '@joao', name: 'João Costa' }} />
            <DirectMessageSelector
              serverID="1"
              user={{ id: '@biro', name: 'Guilherme Belchior' }}
            />
            <DirectMessageSelector
              serverID="1"
              user={{ id: '@lu', name: 'Luana Ferraz' }}
              unreadMessages={32923}
            />
          </ServerBarItemAccordion>
        </Accordion.Root>
      </aside>
      <div className={styles['server-outlet']}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
