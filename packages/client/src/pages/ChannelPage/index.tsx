import { Hash } from 'lucide-react';

import Avatar from '../../components/Avatar';
import Chat from '../../components/Chat';

export default function ChannelPage() {
  return (
    <Chat>
      <Chat.Header>
        <Chat.HeaderTitle>
          <Hash />
          <h1>Channel</h1>
        </Chat.HeaderTitle>
        <Chat.HeaderMeta>
          <div>
            <Avatar userName="Guilherme Marcondes" groupabble size="medium" />
            <Avatar userName="João Costa" groupabble size="medium" />
            <Avatar userName="Guilherme Belchior" groupabble size="medium" />
            <Avatar userName="Luana Ferraz" groupabble size="medium" />
          </div>
          <span className="text--sublte">·</span>
          <span className="text--sublte">43 members</span>
          <span className="text--sublte">·</span>
          <span className="text--medium text--green">12 online</span>
        </Chat.HeaderMeta>
      </Chat.Header>
      <Chat.Body messages={[]} />
    </Chat>
  );
}
