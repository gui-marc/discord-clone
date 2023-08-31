import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const AppRoot = React.lazy(() => import('../pages/AppRootPage'));
const ServerPage = React.lazy(() => import('../pages/ServerPage'));
const ChannelPage = React.lazy(() => import('../pages/ChannelPage'));
const DirectMessagePage = React.lazy(() => import('../pages/DirectMessagePage'));
const GroupPage = React.lazy(() => import('../pages/GroupPage'));

const router = createBrowserRouter([
  {
    path: '',
    index: true,
    Component: HomePage,
  },
  {
    path: 'app',
    Component: AppRoot,
    children: [
      {
        path: 'server/:serverId',
        Component: ServerPage,
        children: [
          {
            path: 'channel/:channelId',
            Component: ChannelPage,
          },
          {
            path: 'messages/:userId',
            Component: DirectMessagePage,
          },
          {
            path: 'group/:groupId',
            Component: GroupPage,
          },
        ],
      },
    ],
  },
]);

export default router;
