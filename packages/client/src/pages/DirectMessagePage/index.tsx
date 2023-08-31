import Avatar from '../../components/Avatar';
import Chat from '../../components/Chat';

export default function DirectMessagePage() {
  return (
    <Chat>
      <Chat.Header>
        <Chat.HeaderTitle>
          <Avatar size="medium" userName="Guilherme Marcondes" />
          <h1>João Costa</h1>
        </Chat.HeaderTitle>
        <Chat.HeaderMeta>
          <span className="text--medium text--green">Online</span>
          <span className="text--subtle">·</span>
          <span></span>
        </Chat.HeaderMeta>
      </Chat.Header>
      <Chat.Body messages={[]} />
    </Chat>
  );
}
